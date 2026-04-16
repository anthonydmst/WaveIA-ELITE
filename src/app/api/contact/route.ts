import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { escapeHtml } from '@/lib/utils';


const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const sourceName = payload._source || 'Nouveau formulaire contact';
    delete payload._source; // Ne pas afficher ça dans la liste finale

    // Construire un tableau HTML propre pour lire facilement chaque donnée
    const entries = Object.entries(payload);
    // Basic protection against ridiculously large payloads
    if (entries.length > 50) {
      return NextResponse.json({ error: "Payload trop volumineux" }, { status: 400 });
    }

    let rows = '';
    for (const [key, value] of entries) {
      let stringValue = String(value);
      if (typeof value === 'object' && value !== null) {
        stringValue = JSON.stringify(value, null, 2);
      }
      
      // Limit text size per field
      if (stringValue.length > 3000) {
        stringValue = stringValue.substring(0, 3000) + '... (tronqué)';
      }

      const escapedKey = escapeHtml(key);
      let displayValue = escapeHtml(stringValue).replace(/\n/g, '<br/>');

      rows += `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #efefef; font-weight: bold; width: 35%; color: #333; text-transform: capitalize;">${escapedKey}</td>
          <td style="padding: 12px; border-bottom: 1px solid #efefef; color: #555;">${displayValue}</td>
        </tr>
      `;
    }

    const htmlBody = `
      <div style="font-family: 'Inter', Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #fff; padding: 30px; border: 1px solid #e2e8f0; border-radius: 12px;">
        <h2 style="color: #0ea5e9; font-size: 24px; margin-top: 0;">🔥 Nouveau Lead Entrant</h2>
        <p style="color: #64748b; font-size: 15px;">Une nouvelle demande a été complétée via le formulaire : <strong>${escapeHtml(sourceName)}</strong>.</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 25px; border: 1px solid #efefef; border-radius: 8px; overflow: hidden;">
          ${rows}
        </table>
        
        <div style="margin-top: 40px; border-top: 1px solid #e2e8f0; padding-top: 20px;">
          <p style="font-size: 12px; color: #94a3b8; margin: 0;">Ce message a été envoyé automatiquement depuis votre serveur WaveIA Elite.</p>
        </div>
      </div>
    `;

    const data = await resend.emails.send({
      from: 'contact@waveia.fr',
      to: 'anthony.damestoy.pro@gmail.com',
      subject: `Nouveau Contact Site Web - ${sourceName}`,
      html: htmlBody,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erreur lors de l'envoi d'email API:", error);
    return NextResponse.json({ error: "Erreur Serveur lors de l'envoi" }, { status: 500 });
  }
}
