import React from 'react'
import { Link } from 'react-router-dom'
import PageLabel from '../components/PageLabel'
import Content from '../components/Content'
import GalleryItem from '../components/GalleryItem'
import GalleryBlurb from '../components/GalleryBlurb'
import Button from '../components/Button'

export default function Artwork() {
  return (
    <Content type="gallery lines">
    <PageLabel label="Artwork" />
      <GalleryBlurb>
        <h2>The Gallery</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et ultrices neque ornare aenean euismod elementum nisi quis. Arcu bibendum at varius vel pharetra vel.</p>
        <Button text='Twitter' link='https://twitter.com/twoartwork' external='true' />
        <Button text='Instagram' link='https://instagram.com/twoartwork' style='yellow' external='true' />
      </GalleryBlurb>
      <GalleryItem 
        image='/images/raidesart180k_final.png'
        title='RaidesArt190k DTYS'
      />
      <GalleryItem 
        image='/images/chainsaw_final.png'
        title='Chainsaw Maids'
      />
      <GalleryItem 
        image='/images/sophie_final.png'
        title="Howl's Moving Castle - Sophie"
      />
    </Content>
  )
}
