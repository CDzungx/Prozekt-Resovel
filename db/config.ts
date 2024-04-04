import { column, defineDb, defineTable } from "astro:db";

// https://astro.build/db/config
const Question = defineTable({
	columns: {
		id: column.number({ primaryKey: true }),
	},
});

const Answer = defineTable({
	columns: {
		id: column.number({ references: () => Question.columns.id }),
		value: column.number(),
		time: column.date(),
	},
});

const BlogPostStat = defineTable({
	columns: {
		id: column.text(),
		view: column.number(),
		like: column.number(),
		share: column.number(),
	},
});

export default defineDb({
	tables: { Question, Answer, BlogPostStat },
});
