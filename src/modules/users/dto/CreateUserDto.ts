import {z} from 'zod';

export const CreateUserSchema = z.object({
  email: z.email('E-mail inválido'),
  password: z.string().trim().min(6, 'Senha muito curta'),
  name: z.string().trim().min(2, 'Nome muito curto'),
  phone: z
    .string()
    .trim()
    .length(11, 'O número deve conter exatamente 11 dígitos (DDD + número).')
    .regex(
      /^(\d{2})9\d{8}$/,
      'O número deve começar com o DDD seguido de 9 e mais 8 dígitos (ex: 11987654321).'
    ),
  photoUrl: z.url().optional()
});

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
