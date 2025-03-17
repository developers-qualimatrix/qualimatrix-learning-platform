"use client";

import { useEffect, useState } from "react";

function useLocalStorage() {
  const [localStorageAvailable, setLocalStorageAvailable] = useState(false);

  useEffect(() => {
    setLocalStorageAvailable(
      typeof window !== "undefined" && !!window.localStorage
    );
  }, []);

  function setItem(key: string, value: string) {
    if (localStorageAvailable) {
      localStorage.setItem(key, value);
    }
  }

  function getItem(key: string) {
    if (localStorageAvailable) {
      return localStorage.getItem(key);
    }
    return null;
  }

  function removeItem(key: string) {
    if (localStorageAvailable) {
      localStorage.removeItem(key);
    }
  }
  function clear() {
    if (localStorageAvailable) {
      localStorage.clear();
    }
  }

  return { setItem, getItem, removeItem, clear };
}

export default useLocalStorage;
