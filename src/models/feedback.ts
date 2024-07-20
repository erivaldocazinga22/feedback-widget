import { z } from "zod";

export type feedbackType = "bug" | "idea" | "thought";

export const feedbackSchema = z.object({
	message: z.string().min(1, "Escreva uma mensagem"),
});

export type feedbackRequest = z.infer<typeof feedbackSchema>;
