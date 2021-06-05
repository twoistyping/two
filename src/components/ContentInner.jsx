import React from 'react'

const ContentInner = props => {
  return (
    <div className="content-lines__content">
      {props.children}
    </div>
  )
}

export default ContentInner;