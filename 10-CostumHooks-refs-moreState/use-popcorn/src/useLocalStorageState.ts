import { useEffect, useState } from "react";
import { MoviesType } from "./Data";

export function useLocalStorageState(
  initialeState: MoviesType[],
  key: string
): [MoviesType[], React.Dispatch<React.SetStateAction<MoviesType[]>>] {
  const [value, setValue] = useState<MoviesType[]>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialeState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
