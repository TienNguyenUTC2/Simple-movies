import { useEffect, useState } from "react";

export default function useDebounce(initialLizeValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initialLizeValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initialLizeValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initialLizeValue]);

  return debounceValue;
}
