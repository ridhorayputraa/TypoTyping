import React from "react";
import Header from "./components/Header";

import RestartButton from "./components/RestartButton";
import Result from "./components/Result";
import UserTyping from "./components/UserTyping";
import useEngine from "./hooks/useEngine";
import { calculateAccuracyPercentage } from "./utils/helpers";

// const words = faker.random.words(10);

function App() {
  const {
    state,
    words,
    timeLeft,
    typed,
    errors,
    restart,
    totalTyped,
  } = useEngine();

  return (
    <>
      <Header />
      <div className="container">
        <CountDownTImer timeLeft={timeLeft} />
        <WordsContainer>
          <UserTyping
            className="absolute inset-0"
            words={words}
            userInput={typed}
          />
          <GenerateWords words={words} />
        </WordsContainer>
        <RestartButton
          className={"mx-auto mt-10 text-slate-500"}
          onRestart={restart}
        />
        <Result
          state={state}
          accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
          errors={errors}
          total={totalTyped}
          className="mt-10"
        />
      </div>
    </>
  );
}

// wrapper
const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative max-w-xl mt-3 text-3xl leading-relaxed break-all">
      {/* Breask-all => font-break to same */}
      {children}
    </div>
  );
};

// words adalah type words yang berbentuk string
const GenerateWords = ({ words }: { words: string }) => {
  return <div className="text-slate-500">{words}</div>;
};

const CountDownTImer = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default App;
