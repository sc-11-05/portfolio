import { useEffect, useState } from "react";

export default function Typewriter({
  words = [],
  speed = 80,
  pause = 1500,
}) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!deleting && charIndex < currentWord.length) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (!deleting && charIndex === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words, speed, pause]);

  return (
  <span className="typewriter-text">
    {text}
    <span className="cursor">|</span>
  </span>
  );
}
