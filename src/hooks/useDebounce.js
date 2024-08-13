import { useEffect } from "react";
import { useState } from "react";

export default function useDebounce(initialValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initialValue);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(initialValue);
    }, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [delay, initialValue]);

  return debounceValue;
}
