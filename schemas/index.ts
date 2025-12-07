import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string()
        .min(1, {
            message: "Email cannot be empty"
        })
        .email({
            message: "Please enter a valid email address"
        }),
    password: z.string()
        .min(1, {
            message: "Password cannot be empty"
        }),
});

export const RegisterSchema = z.object({
    email: z.string()
        .min(1, {
            message: "Email cannot be empty"
        })
        .email({
            message: "Please enter a valid email address"
        }),
    password: z.string()
        .min(6, {
            message: "Password shold contain minimum 6 elements"
        }),
    name: z.string().min(1, {
        message: "Name is required",
    }),
});
