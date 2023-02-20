import React from "react";
import Caret from "./Caret";

function UserTyping({
  userInput,
  className,
}: {
  userInput: string;
  className?: string;
}) {
  const typedCharacters = userInput.split("");

  return (
    <div className={className}>
      {typedCharacters.map((char, index) => {
        return <Character key={`${char}_${index}`} char={char} />;
      })}
      <Caret/>
    </div>
  );
}

const Character = ({ char }: { char: String }) => {
  // warna text akan serprti tiap element dialog
  return <span className="text-primary-400">{char}</span>;
};

export default UserTyping;
