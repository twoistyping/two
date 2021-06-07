import React, { useRef, useState, useEffect } from 'react'

const GalleryItem = ({ image, imageFull, title, alt }) => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const [height, setHeight] = useState(0);

  const handleImageLoad = () => {
    if ((window.innerWidth >= 1000) && imageRef.current && titleRef.current) {
      let padding = 32; // padding above and below image
      var temp = Math.floor((imageRef.current.offsetHeight + titleRef.current.offsetHeight + padding + (imageRef.current.offsetHeight / 2)) / 8);
      setHeight(temp);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleImageLoad);
  }, []);


  return (
    <div className='gallery-item'
      style={{
        gridRowEnd: `span ${height}`
      }}
    >
      {/* <a href={process.env.PUBLIC_URL + imageFull} target='_blank'> */}
        <img 
          className='emote-image' 
          src={process.env.PUBLIC_URL + image} 
          alt={alt}
          ref={imageRef}
          onLoad={handleImageLoad}
        />
      {/* </a> */}
      <h4 ref={titleRef}>{title}</h4>
    </div>
  )
}

export default GalleryItem
