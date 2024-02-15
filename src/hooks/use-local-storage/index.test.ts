import { act, renderHook } from "@testing-library/react";

import { useLocalStorage } from ".";

describe("#useLocalStorage", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("初期値が設定される", () => {
    const initialValue = "initialValue";
    const { result } = renderHook(() => useLocalStorage("key", initialValue));
    expect(result.current.storedValue).toBe(initialValue);
  });

  it("すでに値が保存されている場合、その値が取得される", () => {
    const initialValue = "initialValue";
    localStorage.setItem("key", JSON.stringify(initialValue));
    const { result } = renderHook(() => useLocalStorage("key", "newValue"));
    expect(result.current.storedValue).toBe(initialValue);
  });

  it("値が変更される", () => {
    const initialValue = "initialValue";
    const { result } = renderHook(() => useLocalStorage("key", initialValue));
    expect(result.current.storedValue).toBe(initialValue);

    const newValue = "newValue";
    expect(result.current.storedValue).not.toBe(newValue);
    expect(localStorage.getItem("key")).not.toBe(JSON.stringify(newValue));

    act(() => {
      result.current.setValue(newValue);
    });
    expect(result.current.storedValue).toBe(newValue);
    expect(localStorage.getItem("key")).toBe(JSON.stringify(newValue));
  });
});
