import { act, renderHook } from "@testing-library/react";

import { useLocalStorage } from ".";

describe("#useLocalStorage", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("初期値が設定される", () => {
    const initialValue = "initialValue";
    const {
      result: {
        current: [storedValue],
      },
    } = renderHook(() => useLocalStorage("key", initialValue));
    expect(storedValue).toBe(initialValue);
  });

  it("すでに値が保存されている場合、その値が取得される", () => {
    const initialValue = "initialValue";
    localStorage.setItem("key", JSON.stringify(initialValue));
    const {
      result: {
        current: [storedValue],
      },
    } = renderHook(() => useLocalStorage("key", "newValue"));
    expect(storedValue).toBe(initialValue);
  });

  it("値が変更される", () => {
    const initialValue = "initialValue";
    const { result } = renderHook(() => useLocalStorage("key", initialValue));
    expect(result.current[0]).toBe(initialValue);

    const newValue = "newValue";
    expect(result.current[0]).not.toBe(newValue);
    expect(localStorage.getItem("key")).not.toBe(JSON.stringify(newValue));

    act(() => {
      result.current[1](newValue);
    });
    expect(result.current[0]).toBe(newValue);
    expect(localStorage.getItem("key")).toBe(JSON.stringify(newValue));
  });
});
