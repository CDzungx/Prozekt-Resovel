import { Answer, BlogPostStat, Question, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Question).values([{ id: 1 }]);

	const json = {
		value: 33,
		comment: "ABC123",
	};
}
