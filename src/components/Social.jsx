import React from "react"

import SvgInstagram from "../svgComponents/Instagram.js"
// import SvgTwitter from "../svgComponents/Twitter.js"

export default function Social() {
  return (
    <div className="social">
      {/* <a className='social__single twitter' href='https://twitter.com/twoartwork' target='_blank' rel='noreferrer'>
        <SvgTwitter />
      </a> */}
      <a className="social__single instagram" href="https://instagram.com/twoartwork" target="_blank" rel="noreferrer">
        <SvgInstagram />
      </a>
      <a className="social__single email" href="mailto:twoartwork@gmail.com" target="_blank" rel="noreferrer">
        twoartwork@gmail.com
      </a>
    </div>
  )
}
