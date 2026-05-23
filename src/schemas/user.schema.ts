import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export const formSchema = z.object({
  firstName: z
    .string()
    .min(2, "Name must be at least 2 characters long.")
    .max(24, "Name must be at most 24 characters long.")
    .regex(/^[a-zA-ZÀ-ÿ .]+$/, "Name can only contain letters, spaces and dots."),

  familyName: z
    .string()
    .min(2, "Family name must be at least 2 characters long.")
    .max(32, "Family name must be at most 32 characters long.")
    .regex(/^[a-zA-ZÀ-ÿ .]+$/, "Family name can only contain letters, spaces and dots."),

  email: z
    .email("Invalid email address."),
})

export type FormType = z.infer<typeof formSchema>

export const resolver = zodResolver(formSchema)

export const defaultValues: FormType = {
  firstName: "",
  familyName: "",
  email: "",
}
