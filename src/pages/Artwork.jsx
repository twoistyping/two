import React, { useEffect, useState } from "react"
import ScrollToTop from "../components/ScrollToTop"

import Loader from "../components/Loader"
import PageLabel from "../components/PageLabel"
import Content from "../components/Content"
import GalleryItem from "../components/GalleryItem"
import GalleryBlurb from "../components/GalleryBlurb"
import Button from "../components/Button"

import { images } from "../data/ArtworkImages"

export default function Artwork() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // https://stackoverflow.com/questions/60847095/how-to-load-all-images-before-showing-the-page-in-react
    // https://codesandbox.io/s/react-image-preload-ptosn?file=/src/App.js
    // Used this method, is there a better way?
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image

        loadImg.onload = () =>
          setTimeout(function () {
            resolve(image)
          }, 200)
        // loadImg.onload = () => resolve(image)
        loadImg.onerror = (err) => reject(err)
      })
    }

    Promise.all(images.map((image) => loadImage(process.env.PUBLIC_URL + image.url)))
      .then(() => setLoading(false))
      .catch((err) => console.log("Failed to load images", err))
  })

  return (
    <>
      <ScrollToTop />
      <Content type="gallery lines">
        <Loader loading={loading} />

        {
          /* show content after images have loaded */
          loading ? (
            ""
          ) : (
            <>
              <PageLabel label="Artwork" />
              <GalleryBlurb>
                <h2>The Gallery</h2>
                <p>In the process of growing and developing my skill and style. </p>
                <ul>
                  <li>programs: clip studio paint, photoshop</li>
                  <li>brushes: pencil, watercolour dense, watercolour soft, airbrush</li>
                  <li>tablet: cintiq 13hd</li>
                </ul>
                <Button text="Instagram" link="https://instagram.com/twoartwork" buttonStyle="outline" external="true" />
              </GalleryBlurb>
              {images.map((image, key) => (
                <GalleryItem key={key} image={image.url} imageFull={image.urlFull} title={image.title} alt={image.alt} />
              ))}
            </>
          )
        }
      </Content>
    </>
  )
}
