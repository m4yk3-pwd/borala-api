import {z} from 'zod';

export const UpdateUserSchema = z.object({
  name: z.string().min(2, 'Nome muito curto').optional(),
  phone: z.string().min(11, 'Número inválido').optional(),
  profile_picture: z.url().or(z.literal('')).optional()
});

export type UpdateUserDto = z.infer<typeof UpdateUserSchema>;
