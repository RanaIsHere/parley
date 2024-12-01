import { z } from "zod";
import bcrypt from "bcrypt";

export const AuthFormSchema = z.object({
    email: z.string().email().trim(),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .trim(),
});

export type FormState = | {
    errors?: {
        email?: string[]
        password?: string[]
    }
    message?: string
} | undefined | null;

export async function comparePassword(password: string, hash: string) {
    return await bcrypt.compare(password, hash);
}