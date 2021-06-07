import React from 'react'

import SvgInstagram from '../svgComponents/Instagram.js'
import SvgTwitter from '../svgComponents/Twitter.js'

export default function Social() {
  return (
    <div className="social">
      <a className='social__single instagram' href='' target='_blank'>
        <SvgInstagram />
      </a>
      <a className='social__single twitter' href='' target='_blank'>
        <SvgTwitter />
      </a>
      <a className='social__single email' href='mailto:twoartwork@gmail.com' target='_blank'>twoartwork@gmail.com</a>
    </div>
  )
}
