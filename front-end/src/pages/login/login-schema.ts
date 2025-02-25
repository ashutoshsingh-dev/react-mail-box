import { z } from "zod";

const REQUIRED_MESSAGE = "Required.";

export const LoginFormSchema = z.object({
  email: z.string().min(2, {
    message: REQUIRED_MESSAGE,
  }),
  password: z.string().min(2, {
    message: REQUIRED_MESSAGE,
  }),
});

export type LoginFormTypes = z.infer<typeof LoginFormSchema>;
