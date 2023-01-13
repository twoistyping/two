import React, { useState, useEffect } from "react"
import { HashLink as Link } from "react-router-hash-link"

import ScrollToTop from "../components/ScrollToTop"
import PageLabel from "../components/PageLabel"
import Content from "../components/Content"
import ContentInner from "../components/ContentInner"
import ImportantContent from "../components/ImportantContent"
import PageBlurb from "../components/PageBlurb"
import EmoteGrid from "../components/EmoteGrid"
import EmoteSizes from "../components/EmoteSizes"
import Button from "../components/Button"

import { images } from "../data/EmoteImages"
import Loader from "../components/Loader"

export default function Emotes() {
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
        loadImg.onerror = (err) => reject(err)
      })
    }

    Promise.all(images.map((image) => loadImage(process.env.PUBLIC_URL + image)))
      .then(() => setLoading(false))
      .catch((err) => console.log("Failed to load images", err))
  })

  return (
    <>
      <ScrollToTop />
      <Content type="lines">
        <Loader loading={loading} />
        {loading ? (
          ""
        ) : (
          <>
            <PageLabel label="Emotes" />
            <PageBlurb>
              <h2>Twitch & Discord Emotes</h2>
              <h3>Comissions are closed</h3>
              <p>If you would like to commission me to create emotes for you, please take a look at the prices and details on this page.</p>
              <Button text="Emote Gallery" link="#gallery" />
            </PageBlurb>
            <ContentInner>
              <EmoteGrid emotes={images.slice(0, 3)} />
              <h3>Prices</h3>
              <p>
                <i>line art, flat colour, detailed shading</i>
              </p>
              <ul>
                <li>1 emote: TBD</li>
                <li>3 emotes: TBD</li>
                <li>5 emotes: TBD</li>
              </ul>
              <ImportantContent>prices are based on time that I spend on creating the emotes and revisions</ImportantContent>
              <h3>Before We Start</h3>
              <ul>
                <li>message me with details of the commission you would like, including: reference images, ideas, colour palette, expressions</li>
                <li>I will determine if I feel capable of delivering a commission that meets your wants</li>
                <li>
                  please refer to <Link to="/emotes#gallery">my previous work</Link> for style and capabilities, I cannot promise anything outside of my previous work
                </li>
                <li>payment is through paypal, there will be no refunds</li>
              </ul>
              <h3>Process</h3>
              <ol>
                <li>discussion of general idea and theme/style and payment</li>
                <li>send basic sketch & feedback changes (major changes need to be done here)</li>
                <li>flat colours & feedback changes</li>
                <li>
                  complete lineart and colour
                  <ul>
                    <li>if you are buying a set (more than one emote), I will finalize shading of first emote and send for feedback before I complete the remaining</li>
                  </ul>
                </li>
                <li>send for feedback and final adjustments (no major changes, these should be done during sketches)</li>
                <li>delivery of final set in the sizes below</li>
              </ol>
              <h4>Sizes</h4>
              <EmoteSizes />
              <ImportantContent>if you would like to request another size, please let me know</ImportantContent>
              <h3>Other Details</h3>
              <ul>
                <li>responses in a timely matter will help me keep the process going</li>
              </ul>
              <h3>Terms of Service</h3>
              <ul>
                <li>I have a right to post my work on socials / portfolios / websites</li>
                <li>payment is to be confirmed before any work is delivered</li>
                <li>all commissions are for personal use, please do not resell</li>
                <li>payment is through paypal, there will be no refunds</li>
              </ul>
              <h3>Let's Get Started</h3>
              <ul>
                <li>
                  email me at <Link to="mailto:twoartwork@gmail.com">twoartwork@gmail.com</Link> if you are interested in a set of emotes!
                </li>
              </ul>
              <EmoteGrid id="gallery" emotes={images.slice(3)} />
            </ContentInner>
          </>
        )}
      </Content>
    </>
  )
}
