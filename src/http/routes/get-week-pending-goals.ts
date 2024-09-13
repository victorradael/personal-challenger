import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { getWeekPendingGoals } from "../../functions/get-week-pending-goals";

export const getWeekPendingGoalRoute: FastifyPluginAsyncZod = async (app) => {
	app.get("/pending-goals", async () => {
		const result = await getWeekPendingGoals();

		return result;
	});
};
