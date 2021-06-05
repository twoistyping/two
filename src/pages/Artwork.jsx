import React from 'react'
import { Link } from 'react-router-dom'
import PageLabel from '../components/PageLabel'
import Content from '../components/Content'

export default function Artwork() {
  return (
    <Content type="lines">
      <PageLabel label="Artwork" />
      <h2>This is the artwork.</h2>
    </Content>
  )
}
