import { faker } from "@faker-js/faker/locale/en_US";
import { useState, useCallback } from "react";

const generateWords = (count: number) => {
  return faker.random.words(count).toLowerCase();
};

const useWords = (count: number) => {
  const [words, setWords] = useState<string>(generateWords(count));

  const updateWords = useCallback(() => {
    setWords(generateWords(count));
  }, [count]);
  return { words, updateWords };
};

export default useWords;
