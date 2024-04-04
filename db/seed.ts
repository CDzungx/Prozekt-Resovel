import { Answer, BlogPostStat, Question, db } from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(Question).values([{ id: 1 }]); // TODO
	await db.insert(Question).values([{ id: 2 }]); // TODO
	await db.insert(Question).values([{ id: 3 }]); // TODO
	await db.insert(Question).values([{ id: 4 }]); // TODO

	await db.insert(Answer).values([{ id: 1, value: 3, time: new Date() }]);
	await db.insert(Answer).values([{ id: 2, value: 3, time: new Date() }]);
	await db.insert(Answer).values([{ id: 3, value: 3, time: new Date() }]);
	await db.insert(Answer).values([{ id: 4, value: 2, time: new Date() }]); // TODO

	await db
		.insert(BlogPostStat)
		.values([{ id: "browserswitch", view: 0, like: 0, share: 0 }]);
}
