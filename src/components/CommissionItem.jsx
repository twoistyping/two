import React, { useRef } from 'react'
import Button from '../components/Button'

const CommissionItem = ({ commissionStyle, image, title, alt, sizes }) => {
  const imageRef = useRef(null);
  const imageOverlayRef = useRef(null);
  const buttonsRef = useRef(null);

  const setupButtons = () => {
    return sizes.map((size, key) => {
      return <Button key={key} text={size.name + ' ' + size.price} link='#details' style='commission' mouseOverFunction={onMouseOver} mouseOutFunction={onMouseOut} data={size.heightPercent}><span>{size.name}</span><span>{size.price}</span></Button>;
    });
  }

  const onMouseOver = (e) => {
    if(buttonsRef.current) {
      imageOverlayRef.current.style.transform = 'translateY(' + e.target.getAttribute('data') + ')';
    }
  }

  const onMouseOut = (e) => {
    imageOverlayRef.current.style.transform = 'translateY(100%)';
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
          
        { commissionStyle ? <h4>{commissionStyle}</h4> : '' }
          {setupButtons()}
        </div>
        <p className='small'>{title}</p>
      </div>
    </div>
  )
}

export default CommissionItem
