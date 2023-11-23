import React, { useState, useEffect } from 'react';

const WordFlicker = () => {
  const words = [' DARIA TAYLOR', ' A WEB DESIGNER', ' A BLOGGER', ' A FREELANCER'];
  const [part, setPart] = useState('');
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 120;

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (forwards) {
        if (offset >= words[i].length) {
          setSkipCount((prevSkipCount) => prevSkipCount + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setI((prevI) => (prevI + 1) % words.length);
          setOffset(0);
        }
      }
      const currentPart = words[i].substring(0, offset);
      if (skipCount === 0) {
        setOffset((prevOffset) => (forwards ? prevOffset + 1 : prevOffset - 1));
      }

      setPart(currentPart);
    }, speed);

    return () => clearInterval(intervalId);
  }, [forwards, i, offset, skipCount]);

  return <div className="word" style={{color:"#007bff" , fontSize:"2rem" , margin:"5px"}}>{part}</div>;
};

export default WordFlicker;