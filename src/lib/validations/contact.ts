import { z } from "zod";

// Contact Form Validation Schema
export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom est trop long"),
  
  email: z
    .string()
    .email("Adresse email invalide")
    .toLowerCase(),
  
  phone: z
    .string()
    .regex(
      /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/,
      "Numéro de téléphone invalide (format: 06 12 34 56 78 ou +33 6 12 34 56 78)"
    ),
  
  company: z
    .string()
    .max(100, "Le nom de l'entreprise est trop long")
    .optional()
    .or(z.literal("")),
  
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères")
    .max(2000, "Le message est trop long (max 2000 caractères)"),
});

// Infer TypeScript type from schema
export type ContactFormData = z.infer<typeof contactSchema>;

// Validation function with formatted errors
export function validateContactForm(data: unknown) {
  const result = contactSchema.safeParse(data);
  
  if (!result.success) {
    // Transform Zod errors to field-specific messages
    const fieldErrors: Record<string, string> = {};
    result.error.issues.forEach((err) => {
      const field = err.path[0] as string;
      if (!fieldErrors[field]) {
        fieldErrors[field] = err.message;
      }
    });
    
    return { success: false as const, errors: fieldErrors };
  }
  
  return { success: true as const, data: result.data };
}
