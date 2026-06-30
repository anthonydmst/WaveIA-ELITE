'use server';

import { validateContactForm, type ContactFormData } from "@/lib/validations/contact";
import { Resend } from 'resend';
import { escapeHtml } from "@/lib/utils";

export type ContactActionResult = {
  success: boolean;
  errors?: Record<string, string>;
  message?: string;
};

// Initialisation de Resend dans l'action serveur
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function submitContactForm(
  prevState: ContactActionResult | null,
  data: ContactFormData & { _hp?: string }
): Promise<ContactActionResult> {
  // 0. Honeypot anti-spam: a real user never fills this hidden field.
  // Pretend success so bots don't learn they were filtered.
  if (data._hp && data._hp.trim() !== "") {
    return { success: true, message: "Message envoyé avec succès ! Nous vous répondrons très vite." };
  }

  // 1. Validate on the server
  const validation = validateContactForm(data);
  
  if (!validation.success) {
    return {
      success: false,
      errors: validation.errors,
      message: "Veuillez corriger les erreurs dans le formulaire."
    };
  }

  // 2. Format details for HTML output
  const htmlBody = `
    <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #fff; padding: 30px; border: 1px solid #e2e8f0; border-radius: 12px;">
      <h2 style="color: #0ea5e9; font-size: 24px; margin-top: 0;">🔥 Nouveau Lead Entrant (Page Contact)</h2>
      <p style="color: #64748b; font-size: 15px;">Une nouvelle demande a été soumise depuis la page générale de Contact.</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 25px; border: 1px solid #efefef; border-radius: 8px; overflow: hidden;">
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #efefef; font-weight: bold; width: 35%; color: #333;">Nom / Contact</td>
          <td style="padding: 12px; border-bottom: 1px solid #efefef; color: #555;">${escapeHtml(data.name)}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #efefef; font-weight: bold; color: #333;">Email</td>
          <td style="padding: 12px; border-bottom: 1px solid #efefef; color: #555;">${escapeHtml(data.email)}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #efefef; font-weight: bold; color: #333;">Téléphone</td>
          <td style="padding: 12px; border-bottom: 1px solid #efefef; color: #555;">${escapeHtml(data.phone || 'Non renseigné')}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #efefef; font-weight: bold; color: #333;">Entreprise</td>
          <td style="padding: 12px; border-bottom: 1px solid #efefef; color: #555;">${escapeHtml(data.company || 'Non renseigné')}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #efefef; font-weight: bold; color: #333;">Type de projet</td>
          <td style="padding: 12px; border-bottom: 1px solid #efefef; color: #555;">${escapeHtml(data.projectType)}</td>
        </tr>
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #efefef; font-weight: bold; color: #333;">Budget estimé</td>
          <td style="padding: 12px; border-bottom: 1px solid #efefef; color: #555;">${escapeHtml(data.budget || 'Non renseigné')}</td>
        </tr>
        <tr>
          <td style="padding: 12px; font-weight: bold; color: #333; vertical-align: top;">Message</td>
          <td style="padding: 12px; color: #555;">${escapeHtml(data.message).replace(/\n/g, '<br/>')}</td>
        </tr>
      </table>
      
      <div style="margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
        <p style="font-size: 12px; color: #94a3b8; margin: 0;">Ce message a été envoyé automatiquement depuis votre serveur WaveIA Elite.</p>
      </div>
    </div>
  `;

  // 3. Envoyer l'email reel via Resend
  try {
    await resend.emails.send({
      from: 'contact@waveia.fr',
      to: 'anthony.damestoy.pro@gmail.com',
      subject: `Nouveau Contact Site Web - Page Générale | ${escapeHtml(data.projectType)}`,
      html: htmlBody,
    });
    
    return { success: true, message: "Message envoyé avec succès ! Nous vous répondrons très vite." };
  } catch (error) {
    console.error("Erreur serveur lors de l'envoi du formulaire de contact:", error);
    return {
      success: false,
      message: "Une erreur interne est survenue lors de l'envoi. Veuillez réessayer plus tard ou nous contacter directement."
    };
  }
}
