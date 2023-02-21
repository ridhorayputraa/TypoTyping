import { useCallback, useEffect, useState } from "react";
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

  // Count errors
  const [errors, setErrors] = useState(0);

  const isStaring = state === "start" && cursor > 0;

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, cursor);
    setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
  }, [typed, words, timeLeft, typed]);

  // as soon the user starts typing the first letter, we start
  useEffect(() => {
    if (isStaring) {
      setState("run");
      startCountDown();
    }
  }, [isStaring, startCountDown, cursor]);



  
  return { state, words, timeLeft, typed };
}

export default useEngine;
