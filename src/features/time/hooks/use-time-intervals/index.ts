import { useState } from "react";

import { useLocalStorage } from "@/hooks/use-local-storage";

import { type TimeInterval, validateTimeInterval } from "../../schemas";

export const useTimeIntervals = () => {
  const [timeIntervals, setTimeIntervals] = useLocalStorage<TimeInterval[]>(
    "timeIntervals",
    [{ id: crypto.randomUUID(), start: "", end: "" }]
  );
  const [hasValidTimeIntervals, setHasValidTimeIntervals] = useState(true);

  const onChangeTimeInterval = (id: string, newValue: TimeInterval) => {
    setTimeIntervals(
      timeIntervals.map((interval) =>
        interval.id === id ? newValue : interval
      )
    );
  };

  const onDeleteTimeInterval = (id: string) => {
    if (timeIntervals.length === 1) {
      // If only one interval exists, reset its values instead of deleting
      setTimeIntervals([{ id: crypto.randomUUID(), start: "", end: "" }]);
    } else {
      // If multiple intervals exist, delete the specified one
      setTimeIntervals(timeIntervals.filter((interval) => interval.id !== id));
    }
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

  const validateTimeIntervals = (): { success: boolean } => {
    const isValid =
      timeIntervals.every((interval) => {
        const { success } = validateTimeInterval(interval);
        return success;
      }) && timeIntervals.length > 0;
    setHasValidTimeIntervals(isValid);
    return { success: isValid };
  };

  return {
    timeIntervals,
    hasValidTimeIntervals,
    onChangeTimeInterval,
    onAddTimeInterval,
    onDeleteTimeInterval,
    onResetTimeIntervals,
    validateTimeIntervals,
  };
};
