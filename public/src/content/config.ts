// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const massageCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		image: z.object({
			src: z.string(),
			alt: z.string(),
		}),
	}),
});

const settingsCollection = defineCollection({
	schema: z.object({
		title: z.string().optional(),
		description: z.string().optional(),
		url: z.string().optional(),
		language: z.string().optional(),
	}),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	massage: massageCollection,
	settings: settingsCollection,
};
