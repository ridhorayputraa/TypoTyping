import React from "react";

import { faker } from "@faker-js/faker";
import RestartButton from "./components/RestartButton";

const words = faker.random.words(10);

function App() {
  return (
    <>
      <CountDownTImer timeLeft="30"/>
      <GenerateWords words={words} />
      <RestartButton
      className={'mx-auto mt-10 text-slate-500'}
      onRestart={() => null}
      />
    </>
  );
}

// words adalah type words yang berbentuk string
const GenerateWords = ({ words }: { words: string }) => {
  return <div className="text-4xl text-slate-500 text-center">{words}</div>;
};

const CountDownTImer = ({timeLeft}: {timeLeft: string}) => {
  return <h2 className="text-primary-400 font-medium">Time: {timeLeft}</h2>;
};

export default App;
