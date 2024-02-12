import { act, renderHook } from "@testing-library/react";

import { useTotalTime } from ".";

describe("#useTotalTime", () => {
  it("初期値が0時間0分である", () => {
    const intervals = [
      { id: crypto.randomUUID(), start: "00:00", end: "00:00" },
    ];
    const { result } = renderHook(() => useTotalTime(intervals));

    expect(result.current.total).toEqual({ hours: 0, minutes: 0 });
  });

  it("単一の区間の時間を返す", () => {
    const intervals = [
      { id: crypto.randomUUID(), start: "00:00", end: "01:00" },
    ];
    const { result } = renderHook(() => useTotalTime(intervals));

    act(() => {
      result.current.onAddIntervals();
    });
    expect(result.current.total).toEqual({ hours: 1, minutes: 0 });
  });

  it("同じhourでも区間の時間を返す", () => {
    const intervals = [
      { id: crypto.randomUUID(), start: "03:10", end: "03:20" },
    ];
    const { result } = renderHook(() => useTotalTime(intervals));

    act(() => {
      result.current.onAddIntervals();
    });
    expect(result.current.total).toEqual({ hours: 0, minutes: 10 });
  });

  it("複数の区間の時間の総和を返す", () => {
    const intervals = [
      { id: crypto.randomUUID(), start: "00:00", end: "01:10" },
      { id: crypto.randomUUID(), start: "03:00", end: "05:30" },
    ];
    const { result } = renderHook(() => useTotalTime(intervals));

    act(() => {
      result.current.onAddIntervals();
    });
    expect(result.current.total).toEqual({ hours: 3, minutes: 40 });
  });

  it("日を跨いでも区間の時間を返す", () => {
    const intervals = [
      { id: crypto.randomUUID(), start: "01:10", end: "01:00" },
    ];
    const { result } = renderHook(() => useTotalTime(intervals));

    act(() => {
      result.current.onAddIntervals();
    });
    expect(result.current.total).toEqual({ hours: 23, minutes: 50 });
  });

  it("開始と終了が同じ時刻の場合は0を返す", () => {
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
