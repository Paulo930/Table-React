import { useState } from "react";

/**
 * @param {String} key
 * @param {Any} initialValue
 */
export default function useLocalStorage(key = "", initialValue = "") {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorageState = (newState) => {
    try {
      const newStateValue =
        typeof newState === "function" ? newState(state) : newState;
      setState(newStateValue);
      window.localStorage.setItem(key, JSON.stringify(newStateValue));
    } catch (error) {
      return initialValue;
    }
  };

  return [state, setLocalStorageState];
}
