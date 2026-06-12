// src/inngest/functions.ts
import { inngest } from "./client";
import {createAgent,openai, gemini} from "@inngest/agent-kit";

export const processTask = inngest.createFunction(
   { id: "process-task", triggers: { event: "app/task.created" } },
   async ({ event, step }) => {

      const writer = createAgent({
         name: "writer",
         system: "You are an expert motivator",
         model: gemini({model: "gemini-2.5-flash"})
      })

      const { output } = await writer.run(`Give Motivational Quote for ${event.data?.input}`);

      return { output };
   }
);
