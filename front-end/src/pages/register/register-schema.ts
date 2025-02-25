import { z } from "zod";

const REQUIRED_MESSAGE = "Required.";

export const RegisterFormSchema = z.object({
  email: z.string().min(2, {
    message: REQUIRED_MESSAGE,
  }),
  password: z.string().min(2, {
    message: REQUIRED_MESSAGE,
  }),
});

export type RegisterFormTypes = z.infer<typeof RegisterFormSchema>;
