import React, { useRef } from 'react'
import Button from '../components/Button'

const CommissionItem = ({ image, title, alt, sizes }) => {
  const imageRef = useRef(null);
  const imageOverlayRef = useRef(null);
  const buttonsRef = useRef(null);

  const setupButtons = () => {
    return sizes.map(size => {
      return <Button text={size.name + ' ' + size.price} link='#' style='outline' clickFunction={onButtonClicked} data={size.heightPercent} />;
    });
  }

  const onButtonClicked = (e) => {
    e.preventDefault();

    if(buttonsRef.current) {
      [...buttonsRef.current.children].map(button => {
        button.classList.remove('current');
      })

      imageOverlayRef.current.style.transform = 'translateY(' + e.target.getAttribute('data') + ')';
      e.target.classList.add('current');
    }
  }

  return (
    <div className='commission-item'>
      <div className='commission-image-wrapper'>
        <img 
          className='commission-image' 
          src={process.env.PUBLIC_URL + image} 
          alt={alt}
          ref={imageRef}
        />
        <div 
          className='commission-image-overlay' 
          ref={imageOverlayRef}
        />
      </div>
      <div className='commission-content'>
        <div className='commission-content__buttons' ref={buttonsRef}>
          {setupButtons()}
        </div>
        <p className='small'>{title}</p>
      </div>
    </div>
  )
}

export default CommissionItem
