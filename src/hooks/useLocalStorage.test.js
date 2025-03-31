import { renderHook, act } from "@testing-library/react";
import { useLocalStorage } from "./useLocalStorage";

describe("useLocalStorage Hook", () => {
  it("retrieves initial value from local storage", () => {
    localStorage.setItem("testKey", JSON.stringify("testValue"));
    const { result } = renderHook(() => useLocalStorage("testKey", "defaultValue"));
    expect(result.current[0]).toBe("testValue");
  });

  it("sets and retrieves a new value", () => {
    const { result } = renderHook(() => useLocalStorage("testKey", "defaultValue"));
    act(() => {
      result.current[1]("newValue");
    });
    expect(result.current[0]).toBe("newValue");
    expect(JSON.parse(localStorage.getItem("testKey"))).toBe("newValue");
  });
});
