import { useCallback, useState } from "react";

const useLocalStorage = (key: string, initialValue = "") => {
  const [state, setState] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value) => {
      try {
        setState(value);
        if (typeof value === "string") {
          return localStorage.setItem(key, value);
        }

        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error({ error });
      }
    },
    [key]
  );

  return [state, setValue];
};

export default useLocalStorage;
