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
      { id: crypto.randomUUID(), start: "01:10", end: "01:00" },
    ];
    const { result } = renderHook(() => useTotalTime(intervals));

    act(() => {
      result.current.onAddIntervals();
    });
    expect(result.current.total).toEqual({ hours: 23, minutes: 50 });
  });

  it("returns 0 when there are no intervals", () => {
    const intervals = [
      { id: crypto.randomUUID(), start: "00:00", end: "00:00" },
    ];
    const { result } = renderHook(() => useTotalTime(intervals));

    act(() => {
      result.current.onAddIntervals();
    });
    expect(result.current.total).toEqual({ hours: 0, minutes: 0 });
  });
});
