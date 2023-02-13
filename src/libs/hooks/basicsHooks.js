import { useCallback, useEffect, useState } from "react";

export function useToggle(initialValue = false) {
  const [active, setActive] = useState(initialValue);
  const toggleActive = useCallback((value = null) => {
    if (value && typeof value === "boolean") {
      setActive(value);
    } else {
      setActive((d) => !d);
    }
  });
  return [active, toggleActive];
}
export const throttle = (func, delay) => {
  let inProgress = false;
  return (...args) => {
    if (inProgress) {
      return;
    }
    inProgress = true;
    setTimeout(() => {
      func(...args); // Consider moving this line before the set timeout if you want the very first one to be immediate
      inProgress = false;
    }, delay);
  };
};

export const useResize = (initialValue = window.innerWidth) => {
  const [screenSize, setScreenSize] = useState(initialValue);
  const handleSize = useCallback(() => {
    console.log("resize");
    setScreenSize(window.innerWidth);
  }, [screenSize]);
  useEffect(() => {
    const handleResize = throttle(handleSize, 500);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);
  return [screenSize, handleSize];
};
