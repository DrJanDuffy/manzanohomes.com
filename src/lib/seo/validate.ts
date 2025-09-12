import { z } from 'zod';

// Validate required schema fields
export const PropertyDataSchema = z.object({
  id: z.string().min(1),
  mlsNumber: z.string().min(1),
  price: z.number().positive(),
  address: z.object({
    street: z.string().min(1),
    city: z.string().optional(),
    state: z.string().optional(),
    zip: z.string().optional(),
    lat: z.number(),
    lng: z.number(),
  }),
  details: z.object({
    bedrooms: z.number().int().positive(),
    bathrooms: z.number().positive(),
    squareFeet: z.number().positive(),
    yearBuilt: z.number().int().min(1800).max(new Date().getFullYear()),
  }),
  images: z
    .array(
      z.object({
        url: z.string().url(),
        caption: z.string().optional(),
      })
    )
    .min(1),
});

export const FAQDataSchema = z.object({
  question: z.string().min(1),
  answer: z.string().min(1),
});

export const BreadcrumbDataSchema = z.object({
  name: z.string().min(1),
  url: z.string().min(1),
});

export function validatePropertyData(data: unknown) {
  return PropertyDataSchema.safeParse(data);
}

export function validateFAQData(data: unknown) {
  return FAQDataSchema.safeParse(data);
}

export function validateBreadcrumbData(data: unknown) {
  return BreadcrumbDataSchema.safeParse(data);
}

// Validation helpers
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}
