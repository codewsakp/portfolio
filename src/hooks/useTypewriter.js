import { useEffect, useState } from 'react';

// Types and deletes each word in `words`, forever. Returns the current text.
export default function useTypewriter(words, { type = 90, erase = 50, hold = 1500 } = {}) {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? erase : type;
    if (!deleting && text === word) delay = hold;

    const t = setTimeout(() => {
      if (!deleting && text === word) return setDeleting(true);
      if (deleting && text === '') {
        setDeleting(false);
        return setIndex((i) => (i + 1) % words.length);
      }
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, type, erase, hold]);

  return text;
}
