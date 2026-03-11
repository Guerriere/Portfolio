import { useState, useEffect } from 'react';

export function useTypewriter(text, speed = 35, startDelay = 0) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone]           = useState(false);

  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let idx = 0;
    let timer;

    const start = setTimeout(() => {
      timer = setInterval(() => {
        idx++;
        setDisplayed(text.slice(0, idx));
        if (idx >= text.length) {
          clearInterval(timer);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => { clearTimeout(start); clearInterval(timer); };
  }, [text, speed, startDelay]);

  return { displayed, done };
}
