import { z } from 'zod';

// todo: create a markdown file for companies with the experience
// use zod to create an async schema
export const companies = [
  'Universidad del Norte',
  'Koombea',
  'Globant',
  'Squad Inc',
  'Freelancer',
] as const;

export type Company = (typeof companies)[number];

export const CompanyNameSchema = z.enum(companies);
