import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(5, "Password must be at lest 5 characters"),
});

export type SignInFormData = z.infer<typeof signInSchema>;
export const defaultValues: SignInFormData = {
  email: "",
  password: "",
};
