import { act, renderHook } from "@testing-library/react";

import { useTotalTime } from ".";

describe("#useTotalTime", () => {
  it("has 0 hours and 0 minutes as default values", () => {
    const intervals = [
      { id: crypto.randomUUID(), start: "00:00", end: "00:00" },
    ];
    const { result } = renderHook(() => useTotalTime(intervals));

    expect(result.current.total).toEqual({ hours: 0, minutes: 0 });
  });

  it("returns the total time", () => {
    const intervals = [
      { id: crypto.randomUUID(), start: "00:00", end: "01:00" },
    ];
    const { result } = renderHook(() => useTotalTime(intervals));

    act(() => {
      result.current.onAddIntervals();
    });
    expect(result.current.total).toEqual({ hours: 1, minutes: 0 });
  });

  it("returns the total time even across days", () => {
    const intervals = [
      { id: crypto.randomUUID(), start: "23:00", end: "01:00" },
    ];
    const { result } = renderHook(() => useTotalTime(intervals));

    act(() => {
      result.current.onAddIntervals();
    });
    expect(result.current.total).toEqual({ hours: 2, minutes: 0 });
  });
});
