import { z } from "zod";

export const signUpSchema = z
  .object({
    avatar: z
      .unknown()
      .transform((value) => value as FileList)
      .or(z.null())
      .refine((file) => file !== undefined, "Avatar is required"),
    fullName: z.string().min(1, "Full Name is required"),
    phoneNumber: z.string().min(1, "Phone Number is required"),
    email: z.string().email("Invalid email address").min(1, "Email is required"),
    password: z.string().min(5, "Password must be at lest 5 characters"),
    confirmPassword: z.string().min(5, "Confirm Password must be at lest 5 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });

export type SignUpFormData = z.infer<typeof signUpSchema>;
export const defaultValues: SignUpFormData = {
  avatar: null,
  fullName: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};
