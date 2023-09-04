import { z } from 'zod';
import { CompanyNameSchema } from './companies';

export type Language = { name: string; level: string };

const dateSchema = z.unknown().pipe(z.coerce.date());

export const LanguageSchema = z.object({ name: z.string(), level: z.string() });

export const ProjectSchema = z.object({
  name: z.string(),
  slug: z.string(),
  images: z.array(z.string()).optional(),
  company: CompanyNameSchema,
  description: z.string().optional(),
  content: z.string(),
  skills: z.array(z.string()),
  startDate: dateSchema,
  endDate: dateSchema.optional(),
});

export type Project = z.infer<typeof ProjectSchema>;

export const WorkExperienceSchema = z.object({
  type: z.literal('work'),
  position: z.string(),
  company: CompanyNameSchema,
  description: z.string().optional(),
  location: z.string(),
  link: z.string().optional(),
  startDate: dateSchema,
  endDate: dateSchema.optional(),
});

export type WorkExperience = z.infer<typeof WorkExperienceSchema>;

export const EducationExperienceSchema = WorkExperienceSchema.extend({
  type: z.literal('education'),
});

export type EducationExperience = z.infer<typeof EducationExperienceSchema>;

export const ExperiencesSchema = z.array(
  z.union([WorkExperienceSchema, EducationExperienceSchema]),
);
