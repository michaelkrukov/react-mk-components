import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

const BodyEnd = ({ children }) => {
  const el = useRef(null);

  if (el.current === null) {
    el.current = document.createElement('div');
    el.current.style.display = 'contents';
  }

  useEffect(() => {
    document.body.appendChild(el.current);
    return () => document.body.removeChild(el.current);
  }, []);

  return createPortal(children, el.current);
};

export default BodyEnd;
