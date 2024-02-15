import { z } from "zod";

const TotalTime = z.object({
  hours: z.number(),
  minutes: z.number(),
});

export type TotalTime = z.infer<typeof TotalTime>;
