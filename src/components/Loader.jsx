import React, { useEffect, useRef } from 'react'

import { symbols } from '../data/Symbols'

const Loader = ({ loading }) => {
  const textRef = useRef(null);
  const loaderRef = useRef(null);
  
  const linkTitle = [..."Loading"].map((letter, key) => {
    return <span key={key} letter={letter}>{letter}</span>
  });

  const scrambleLetters = () => {
    scrambleLettersOuterHelper([...textRef.current.children]);
  }

  const scrambleLettersOuterHelper = (array) => {
    let letters = symbols.sort(() => Math.random() - Math.random()).slice(0, 3);
    let index = Math.floor(Math.random() * (array.length - 0) + 0);

    if (typeof array[index] !== 'undefined') {
      letters.push(array[index].getAttribute('letter'));
      var j;
      
      if (loaderRef.current.classList.contains('show')) {
        setTimeout(() => scrambleLettersOuterHelper(array), 300);

        for(j = 0; j < 4; j++) {
          scrambleLettersHelper(index, j, array[index], letters[j]);
        }
      }
    }
  }

  const scrambleLettersHelper = (i, j, element, letter) => {
    setTimeout(function() {
      element.innerHTML = letter;
    }, 100 * j);
  };

  useEffect(() => {
    scrambleLetters();
  });

  return (
    <div className={'loader ' + (loading ? 'show' : 'hide')} ref={loaderRef}>
      <p ref={textRef}>{linkTitle}</p>
    </div>
  )
}

export default Loader
