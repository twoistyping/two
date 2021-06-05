import React from 'react'

const EmoteGrid = ({ id, emotes }) => {
  const emoteBox = emotes.map((emote, key) => {
    return (
      <div className='emote-wrapper' key={key}>
        <img className='emote-image' src={process.env.PUBLIC_URL + emote}/>
      </div>
    )
  });

  return (
    <div id={id} className="emote-grid">
      {emoteBox}
    </div>
  )
}

export default EmoteGrid
