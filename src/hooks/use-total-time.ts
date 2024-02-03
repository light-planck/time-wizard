import { useState } from "react";

import { TimeInterval, TotalTime } from "@/types";

export const useTotalTime = (intervals: TimeInterval[]) => {
  const [total, setTotal] = useState<TotalTime>({ hours: 0, minutes: 0 });

  const onAddIntervals = () => {
    const total = intervals.reduce((acc, interval) => {
      const start = new Date(`2021-01-01T${interval.start}`);
      const end = new Date(`2021-01-01T${interval.end}`);
      return acc + (end.getTime() - start.getTime());
    }, 0);

    setTotal({
      hours: Math.floor(total / 1000 / 60 / 60),
      minutes: Math.floor((total / 1000 / 60) % 60),
    });
  };

  return {
    total,
    onAddIntervals,
  };
};
