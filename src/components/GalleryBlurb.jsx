import React, {useState, useEffect, useRef, useLayoutEffect} from 'react'

const GalleryBlurb = props => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  const handleContentHeight = () => {
    if (window.innerWidth >= 1000) {
      var heightTemp = 0;

      [...contentRef.current.children].map((child) => {
        heightTemp += child.offsetHeight;
      })

      setHeight(Math.floor((heightTemp + 200) / 8));
    }
  }

  useEffect(() => {
    handleContentHeight();
  });

  useLayoutEffect(() => {
    window.addEventListener('resize', handleContentHeight);
  }, []);

  return (
    <div 
      className="gallery-blurb" 
      ref={contentRef}
      style={{
        gridRowEnd: `span ${height}`
      }}
    >
      {props.children}
    </div>
  )
}

export default GalleryBlurb
