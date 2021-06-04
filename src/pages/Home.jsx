import React from 'react'
import { Link } from 'react-router-dom'
import SvgCat from '../svgComponents/Cat.js'
import SvgSymbols from '../svgComponents/Symbols.js'

export default function Home() {
  return (
    <div className="home">
      <SvgCat />
      <SvgSymbols />
    </div>
  )
}
