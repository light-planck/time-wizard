import { useLocalStorage } from "usehooks-ts";

import { TimeInterval } from "@/types";

export const useTimeIntervals = () => {
  const [timeIntervals, setTimeIntervals] = useLocalStorage<TimeInterval[]>(
    "timeIntervals",
    [{ id: crypto.randomUUID(), start: "", end: "" }],
  );

  const onChangeTimeInterval = (id: string, newValue: TimeInterval) => {
    setTimeIntervals(
      timeIntervals.map((interval) =>
        interval.id === id ? newValue : interval,
      ),
    );
  };

  const onDeleteTimeInterval = (id: string) => {
    setTimeIntervals(timeIntervals.filter((interval) => interval.id !== id));
  };

  const onAddTimeInterval = () => {
    setTimeIntervals([
      ...timeIntervals,
      { id: crypto.randomUUID(), start: "", end: "" },
    ]);
  };

  const onResetTimeIntervals = () => {
    setTimeIntervals([{ id: crypto.randomUUID(), start: "", end: "" }]);
  };

  return {
    timeIntervals,
    onChangeTimeInterval,
    onAddTimeInterval,
    onDeleteTimeInterval,
    onResetTimeIntervals,
  };
};
