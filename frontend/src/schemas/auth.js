import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, "El nombre de usuario es requerido"),
  password: z
    .string()
    .min(1, "La contraseña es requerida")
});

export const registerSchema = z.object({
  username: z
    .string()
    .min(1, "El nombre de usuario es requerido")
    .min(5, "El nombre de usuario debe tener al menos 5 caracteres"),
  password: z
    .string()
    .min(1, "La contraseña es requerida")
    .min(8, "La contraseña debe tener al menos 8 caracteres")
});