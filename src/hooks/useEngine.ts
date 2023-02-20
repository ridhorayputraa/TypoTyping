import { useState } from "react";
import useWords from "./useWords";

export type stateData = "start" | "run" | "finish";

const NUMBERS_OF_WORDS = 12;

function useEngine() {
  const [state, setState] = useState<stateData>("start");
  const { words, updateWords } = useWords(NUMBERS_OF_WORDS);

  return { state, words };
}

export default useEngine;
