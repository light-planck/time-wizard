import { z } from "zod";

const regex = /^([01]\d|2[0-3]):([0-5]\d)$/;

const TimeInterval = z
  .object({
    id: z.string().uuid(),
    start: z.string(),
    end: z.string(),
  })
  .refine((value) => regex.test(value.start) && regex.test(value.end));

export type TimeInterval = z.infer<typeof TimeInterval>;

export const validateTimeInterval = (timeInterval: TimeInterval) =>
  TimeInterval.safeParse(timeInterval);
