import { column, defineDb, defineTable } from "astro:db";

// https://astro.build/db/config
const Question = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
	},
});

const Answer = defineTable({
	columns: {
		time: column.date(),
		value: column.json(),
		comment: column.number(),
	},
});

const BlogPostStat = defineTable({
	columns: {
		id: column.text(),
		view: column.number(),
		like: column.number(),
	},
});

export default defineDb({
	tables: { Question, Answer, BlogPostStat },
});
