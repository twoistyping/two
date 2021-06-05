import React from 'react'
import { Link } from "react-router-dom"

const Button = ({ text, link }) => {
  var symbols = ["!", "@", "#", "$", "%", "&", "?"];
  var timer, innerTimer;

  const linkTitle = [...text].map((letter, key) => {
    return <span key={key} letter={letter}>{letter}</span>
  });

  const handleHover = (e) => {
    handlehoverOuterHelper([...e.target.children]);
  }

  const handlehoverOuterHelper = (array) => {
    let letters = symbols.sort(() => Math.random() - Math.random()).slice(0, 3);
    var time = Math.random() * (500 - 200) + 200;
    let index = Math.floor(Math.random() * (array.length - 0) + 0);
    letters.push(array[index].getAttribute('letter'));
    var j;

    timer = setTimeout(() => handlehoverOuterHelper(array), 300);

    setTimeout(function() {
      for(j = 0; j < 4; j++) {
        handleHoverHelper(index, j, array[index], letters[j]);
      }
    }, time);
  }

  const handleHoverHelper = (i, j, element, letter) => {
    innerTimer = setTimeout(function() {
      element.innerHTML = letter;
    }, 300 * j);
  };

  const handleMouseLeave = (e) => {
    clearTimeout(timer);
    timer = 0;
    
    [...e.target.children].map((letter) => {
      letter.innerHTML = letter.getAttribute('letter');
    });
  }

  return (
    <Link
      className='btn'
      to={link}
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
    >
      {linkTitle}
    </Link>
  )
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