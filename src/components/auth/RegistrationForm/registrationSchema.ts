import { z } from 'zod'

export const registrationSchema = z
  .object({
    confirm: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
  })
  .refine(data => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ['confirm'],
  })
