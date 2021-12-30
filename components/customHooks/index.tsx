import { useState, useEffect, useRef } from 'react';

export const useHover = () => {
  const [value, setValue] = useState(false);

  const ref = useRef<null | HTMLElement>(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(
    () => {
      const node = ref.current;

      if (node && node !== null) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
        return () => {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        };
      }
    },
    [], // Recall only if ref changes
  );
  return [ref, value];
};
