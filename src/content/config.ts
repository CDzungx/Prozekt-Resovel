import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			author: z.string().default("CDzungx"),
			language: z.enum(["en", "vi"]),
			date: z.date(),
			update: z.date().optional(),
			cover: image().refine((img) => img.width >= 1080, {
				message: "Cover image must be at least 1080 pixels wide!",
			}),
			coverAlt: z.string().default("Cover image"),
			maxDepthTOC: z.number().optional(),
			tags: z.array(z.string()).optional(),
		}),
});

export const collections = {
	blog: blogCollection,
};
