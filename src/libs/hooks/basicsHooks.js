import { useCallback, useState } from "react";

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
