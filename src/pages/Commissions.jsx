import React from 'react'
import { Link } from 'react-router-dom'
import PageLabel from '../components/PageLabel'
import Content from '../components/Content'

export default function Commissions() {
  return (
    <Content type="lines">
      <PageLabel label="Commissions" />
      <h2>These are commissions.</h2>
    </Content>
  )
}
