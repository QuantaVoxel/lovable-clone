import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import {inngest} from "@/inngest/client";

export const appRouter = createTRPCRouter({
   task: baseProcedure
      .input(
         z.object({
            input: z.string(),
         }),
      )
      .mutation(async ({ input }) => {
         return inngest.send({
            name: "app/task.created",
            data: {
               input: input.input
            }
         })
      }),
});

// export type definition of API
export type AppRouter = typeof appRouter;