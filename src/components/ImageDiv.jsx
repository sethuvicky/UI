import React from 'react'

const imageDiv = ({image}) => {
  return (
    <div>
        <img   style={{border:"2px solid #D4AF38",borderRadius:"10px"}}width="80%" height="100%" src={`${image}`} />
    </div>
  )
}

export default imageDiv