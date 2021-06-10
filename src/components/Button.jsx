import React, { useRef } from 'react'
// import { Link } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';

const Button = ({ 
  text, 
  link, 
  buttonStyle, 
  external, 
  mouseClickFunction, 
  mouseOverFunction, 
  mouseOutFunction, 
  data, 
  children 
}) => {
  const buttonRef = useRef(null);
  var symbols = ["!", "@", "#", "$", "%", "&", "?"];
  var timer;

  const linkTitle = [...text].map((letter, key) => {
    return <span key={key} letter={letter}>{letter}</span>
  });

  const handleHover = (e) => {
    handlehoverOuterHelper([...e.target.children]);
  }

  const handlehoverOuterHelper = (array) => {
    let letters = symbols.sort(() => Math.random() - Math.random()).slice(0, 3);
    let index = Math.floor(Math.random() * (array.length - 0) + 0);

    if (typeof array[index] !== 'undefined') {
      letters.push(array[index].getAttribute('letter'));
      var j;

      timer = setTimeout(() => handlehoverOuterHelper(array), 300);

      for(j = 0; j < 4; j++) {
        handleHoverHelper(index, j, array[index], letters[j]);
      }
    }
  }

  const handleHoverHelper = (i, j, element, letter) => {
    setTimeout(function() {
      element.innerHTML = letter;
    }, 300 * j);
  };

  const handleMouseLeave = (e) => {
    clearTimeout(timer);
    timer = null;
  }

  const handleButtonClick = (e) => {
    handleMouseLeave(e);
    if(mouseClickFunction) {
      mouseClickFunction(e);
    }
  }

  if (external) {
    return (
      <a
        className={'btn ' + (buttonStyle ? buttonStyle : '')}
        href={link}
        target='_blank'
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
        data={data}
        rel='noreferrer'
      >
        {linkTitle}
      </a>
    )
  } else {
    return (
      <Link
        className={'btn ' + (buttonStyle ? buttonStyle : '')}
        to={link}
        onMouseEnter={ mouseOverFunction ? mouseOverFunction : handleHover }
        onMouseLeave={ mouseOutFunction ? mouseOutFunction : handleMouseLeave }
        onClick={handleButtonClick}
        data={data}
        ref={buttonRef}
      >
        { children ? children : linkTitle }
      </Link>
    )
  }
}

export default Button


  // const handleHover = (e) => {
  //   var symbols = ["!", "@", "#", "$", "%", "&", "?"];

  //   let i, j;
    
  //   for(i = 0; i < [...e.target.children].length; i++) {
  //     let selected = symbols.sort(() => Math.random() - Math.random()).slice(0, 3);
  //     let originalLetter = [...e.target.children][i].innerHTML;
  //     handleHoverHelperOuter(i, j, [...e.target.children][i], selected);
  //   }
  // };

  // const handleHoverHelperOuter = (i, j, array, letters) => {
  //   setTimeout(function() {
  //     for(j = 0; j < 3; j++) {
  //       handleHoverHelper(i, j, array, letters[j]);
  //     }
  //   }, 100 * i);
  // };