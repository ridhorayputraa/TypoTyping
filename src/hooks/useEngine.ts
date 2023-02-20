import { useState } from "react";
import useCountdownTimer from "./useCountDown";
import useWords from "./useWords";

export type stateData = "start" | "run" | "finish";

const NUMBERS_OF_WORDS = 12;
const COUNTDOWN_SECONDS = 30;

function useEngine() {
  const [state, setState] = useState<stateData>("start");
  const { words, updateWords } = useWords(NUMBERS_OF_WORDS);
  const { timeLeft, startCountDown, resetCountdown } = useCountdownTimer(
    COUNTDOWN_SECONDS
  );

  return { state, words, timeLeft };
}

export default useEngine;
