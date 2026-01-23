const WaveText = ({ text, className }: { text: string, className?: string }) => {
  return (
    <h2 className={`${className} wave-text`}>
      {text.split("").map((char, i) => (
        <span key={i} style={{ "--i": i } as React.CSSProperties}>
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h2>
  );
};

export default WaveText;
