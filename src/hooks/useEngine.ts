import { useCallback, useEffect, useState } from "react";
import useCountdownTimer from "./useCountDown";
import useTypings from "./useTypings";
import useWords from "./useWords";
import { countErrors } from "../utils/helpers";

export type stateData = "start" | "run" | "finish";

const NUMBERS_OF_WORDS = 15;
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

  const isStarting = state === "start" && cursor > 0;
  const areWrodsFinished = cursor === words.length;
  // areWrodsFinished => tell we are in the last charcacter
  //  in the current generated words

  const sumErrors = useCallback(() => {
    const wordsReached = words.substring(0, cursor);
    setErrors((prevErrors) => prevErrors + countErrors(typed, wordsReached));
  }, [words, timeLeft, typed]);

  // as soon the user starts typing the first letter, we start
  useEffect(() => {
    if (isStarting) {
      setState("run");
      startCountDown();
    }
  }, [isStarting, startCountDown, cursor]);

  // behaviour when time is zero
  // when the time is up, we've finished
  useEffect(() => {
    if (!timeLeft) {
      console.log("time is up.....");
      console.log("tanks to run this app");
      setState("finish");
      sumErrors();
    }
  }, [timeLeft, sumErrors]);

  // When the current words are all filled up,
  // generate and saw another set of words
  useEffect(() => {
    // jika sudah finish
    if (areWrodsFinished) {
      sumErrors();
      updateWords();
      clearTyped();
    }
  }, [
    cursor,
    words,
    clearTyped,
    typed,
    areWrodsFinished,
    updateWords,
    sumErrors,
  ]);

  // Restart fn
  const restart = useCallback(() => {
    console.log("restarting....");
    resetCountdown();
    resetTotalTyped();
    setState("start");
    setErrors(0);
    updateWords();
    clearTyped();
  }, [clearTyped, updateWords, resetCountdown, resetTotalTyped]);

  return { state, words, timeLeft, typed, errors, totalTyped, restart };
}

export default useEngine;
