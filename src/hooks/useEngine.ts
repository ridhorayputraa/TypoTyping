import { useCallback, useState } from "react";
import useCountdownTimer from "./useCountDown";
import useTypings from "./useTypings";
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

  const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTypings(
    state !== "finish"
  );

  return { state, words, timeLeft, typed };
}

export default useEngine;
