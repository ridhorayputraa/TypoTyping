import React from "react";
import Caret from "./Caret";
import cn from "classnames";

function UserTyping({
  userInput,
  className,
  words,
}: {
  userInput: string;
  words: string;
  className?: string;
}) {
  const typedCharacters = userInput.split("");

  return (
    <div className={className}>
      {typedCharacters.map((char, index) => {
        return (
          <Character
            key={`${char}_${index}`}
            actual={char}
            expected={words[index]}
          />
        );
      })}
      <Caret />
    </div>
  );
}

const Character = ({
  actual,
  expected,
}: {
  actual: string;
  expected: string;
}) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === " ";

  // warna text akan serprti tiap element dialog
  return (
    <span
      className={cn({
        // koondisi ketika salah
        "text-red-500": !isCorrect && !isWhiteSpace,
        // kondiisi ketika benar
        "text-primary-400": isCorrect && !isWhiteSpace,
        // konidisi ketika salah dan ada spasi
        "bg-red-500/50": !isCorrect && isWhiteSpace,
      })}
    >
      {expected}
    </span>
  );
};

export default UserTyping;
