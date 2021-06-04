import React from 'react'
import PageLabel from '../components/PageLabel.jsx'
import SvgCat from '../svgComponents/Cat.js'
import SvgSymbols from '../svgComponents/Symbols.js'

export default function Home() {
  return (
    <div className="home">
      <PageLabel label="welcome" />
      <SvgCat />
      <SvgSymbols />
    </div>
  )
}
