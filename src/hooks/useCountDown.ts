import { useCallback, useEffect, useState, useRef } from "react";

const useCountdownTimer = (seconds: number) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  // for START
  const startCountDown = useCallback(() => {
    console.log("starting countDown....");

    intervalRef.current = setInterval(() => {
      setTimeLeft((timeLeft) => timeLeft - 1);
    }, 1000);
  }, [setTimeLeft]);

  //   for RESET
  const resetCountdown = useCallback(() => {
    console.log("resetting countdown...");
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimeLeft(seconds);
  }, [seconds]);

  //   to fixing lack memory adding useEffect
  // When the countdown reaches 0, clear the countdonwn interval
  useEffect(() => {
    if (!timeLeft && intervalRef.current) {
      console.log("clearing timer...");

      clearInterval(intervalRef.current);
    }
  }, [timeLeft, intervalRef]);

  return { timeLeft, startCountDown, resetCountdown };
};

export default useCountdownTimer;
