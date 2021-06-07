import React from 'react'
import Footer from '../components/Footer'

const Content = (props) => {
  return (
    <>
      <div className={'content ' + (props.type ? props.type : '')}>
        {props.children}
      </div>
      <Footer />
    </>
  )
}

Content.defaultProps = {
	type: "basic"
}

export default Content;