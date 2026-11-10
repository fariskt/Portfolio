import React from "react";

interface WaveTextProps {
  text: string;
  className?: string;
}

export default function WaveText({ text, className = "" }: WaveTextProps) {
  return (
    <h2 className={`${className} wave-text`}>
      {text.split("").map((char, index) => (
        <span key={index} style={{ "--i": index } as React.CSSProperties}>
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </h2>
  );
}
