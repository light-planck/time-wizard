import { useState } from "react";

import { TimeInterval, TotalTime } from "@/types";

export const useTotalTime = (intervals: TimeInterval[]) => {
  const [total, setTotal] = useState<TotalTime>({ hours: 0, minutes: 0 });

  const onAddIntervals = () => {
    const total = intervals.reduce((acc, interval) => {
      const start = {
        hour: Number(interval.start.slice(0, 2)),
        minute: Number(interval.start.slice(3)),
      };
      const end = {
        hour: Number(interval.end.slice(0, 2)),
        minute: Number(interval.end.slice(3)),
      };

      if (end.hour > start.hour) {
        return acc + (end.hour - start.hour) * 60 + (end.minute - start.minute);
      } else {
        return (
          acc + (end.hour + 24 - start.hour) * 60 + (end.minute - start.minute)
        );
      }
    }, 0);

    setTotal({
      hours: Math.floor(total / 60),
      minutes: total % 60,
    });
  };

  return {
    total,
    onAddIntervals,
  };
};
