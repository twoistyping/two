import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Loader from '../components/Loader'
import ScrollToTop from '../components/ScrollToTop'
import PageLabel from '../components/PageLabel'
import Content from '../components/Content'
import ContentInner from '../components/ContentInner'
import PageBlurb from '../components/PageBlurb'
import Button from '../components/Button'
import CommissionItem from '../components/CommissionItem'

import { images } from '../data/CommissionImages'

export default function Commissions() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // https://stackoverflow.com/questions/60847095/how-to-load-all-images-before-showing-the-page-in-react
    // https://codesandbox.io/s/react-image-preload-ptosn?file=/src/App.js
    // Used this method, is there a better way?
    const loadImage = image => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image()
        loadImg.src = image
        
        loadImg.onload = () => setTimeout(function() {resolve(image)}, 200);
        loadImg.onerror = err => reject(err)
      })
    }

    Promise.all(images.map(image => loadImage(process.env.PUBLIC_URL + image.url)))
      .then(() => setLoading(false))
      .catch(err => console.log("Failed to load images", err))
  });

  return (
    <>
      <ScrollToTop />
      <Content type="lines">
        <Loader loading={ loading } />
        
        { /* show content after images have loaded */
          loading ? '' :
        <>
          
          <PageLabel label="Commissions" />
          <PageBlurb> 
            <h2>Work with Me</h2>
            <p>I am still in the process of learning and developing my style, so if you would like to commmission me please refer to my previous work to see my capabilities.</p>
            <p>If you are into my artwork, check out the commission details!</p>
            <Button text='Commission Details' link='#details' />
            <Button text='Artwork Gallery' link='/artwork' style='yellow' />
          </PageBlurb>
          <ContentInner>
            {
              images.map((image, key) => (
                <CommissionItem 
                  key={key}
                  commissionStyle={image.commissionStyle}
                  image={image.url}
                  title={image.title}
                  alt={image.alt}
                  sizes={image.sizes}
                />
              ))
            }
            <h3 id='details'>Before We Start</h3>
            <ul>
              <li>message me with details of the commission you would like, including: reference images, ideas, colour palette, expressions</li>
              <li>I will determine if I feel capable of delivering a commission that meets your wants</li>
              <li>please refer to <Link to='/artwork'>my previous work</Link> for style and capabilities, I cannot promise anything outside of my previous work</li>
              <li>payment is through paypal, there will be no refunds</li>
            </ul>
            <h3>Process</h3>
            <ol>
              <li>discussion of general idea and theme/style and payment</li>
              <li>send basic sketch & feedback changes (major changes need to be done here)</li>
              <li>flat colours & feedback changes</li>
              <li>complete lineart and colour</li>
              <li>send for feedback and final adjustments (no major changes, these should be done during sketches)</li>
              <li>delivery of final image (can request multiple sizes)</li>
            </ol>
            <h3>Other Details</h3>
            <ul>
              <li>responses in a timely matter will help me keep the process going</li>
              <li>extra revisions: $20 per hour, min 1 hour (outside of revisions during the process)</li>
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
              <li>email me at <Link to="mailto:twoartwork@gmail.com">twoartwork@gmail.com</Link> if you are interested in a set of emotes!</li>
            </ul>
          </ContentInner>
        </>
        }
      </Content>
    </>
  )
}
