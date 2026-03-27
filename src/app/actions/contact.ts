'use server';

import { validateContactForm, type ContactFormData } from "@/lib/validations/contact";

export type ContactActionResult = {
  success: boolean;
  errors?: Record<string, string>;
  message?: string;
};

export async function submitContactForm(
  prevState: ContactActionResult | null,
  data: ContactFormData
): Promise<ContactActionResult> {
  // 1. Validate on the server
  const validation = validateContactForm(data);
  
  if (!validation.success) {
    return {
      success: false,
      errors: validation.errors,
      message: "Veuillez corriger les erreurs dans le formulaire."
    };
  }

  // 2. Simulate email sending / database storage
  try {
    // Artificial delay to simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    // In a real app, you would send an email here using Resend, Nodemailer, etc.
    // await sendEmail(data);
    
    return { success: true, message: "Message envoyé avec succès !" };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
    };
  }
}
