import React from 'react'

const Content = (props) => {
  return (
    <div className={'content ' + (props.type ? props.type : '')}>
      {props.children}
    </div>
  )
}

Content.defaultProps = {
	type: "basic"
}

export default Content;