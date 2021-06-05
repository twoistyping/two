import React from 'react'

const Content = (props) => {
  if (props.type === "lines") {
    return (
      <div className="content-lines-wrapper">
        {props.children}
      </div>
    )
  } else {
    return (
      <div className="content">
        {props.children}
      </div>
    )
  }
}

Content.defaultProps = {
	type: "basic"
}

export default Content;