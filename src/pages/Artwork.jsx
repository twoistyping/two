import React, { useEffect, useState } from 'react'

import Loader from '../components/Loader'
import PageLabel from '../components/PageLabel'
import Content from '../components/Content'
import GalleryItem from '../components/GalleryItem'
import GalleryBlurb from '../components/GalleryBlurb'
import Button from '../components/Button'

import { images } from '../data/ArtworkImages'

export default function Artwork() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // https://stackoverflow.com/questions/60847095/how-to-load-all-images-before-showing-the-page-in-react
    // https://codesandbox.io/s/react-image-preload-ptosn?file=/src/App.js
    // Used this method, is there a better way?
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image
        
        loadImg.onload = () => setTimeout(function() {resolve(image)}, 1000);
        // loadImg.onload = () => resolve(image)
        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(images.map(image => loadImage(process.env.PUBLIC_URL + image.url)))
      .then(() => setLoading(false))
      .catch(err => console.log("Failed to load images", err))
  });

  return (
    <Content type="gallery lines">
      <Loader loading={ loading } />

      { /* show content after images have loaded */
        loading ? '' :
        <>
          <PageLabel label="Artwork" />
          <GalleryBlurb>
            <h2>The Gallery</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum nisi quis. Arcu bibendum at varius vel pharetra vel.</p>
            <Button text='Twitter' link='https://twitter.com/twoartwork' external='true' />
            <Button text='Instagram' link='https://instagram.com/twoartwork' style='yellow' external='true' />
          </GalleryBlurb>
          {
            images.map(image => (
              <GalleryItem 
                image={image.url}
                title={image.title}
                alt={image.alt}
              />
            ))
          }
        </>
      }
      
    </Content>
  )
}
