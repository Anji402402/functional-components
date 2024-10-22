import React from 'react'

function Mobile (props){
  return (
    <div className='Mobile'>
        <img src={props.picURL}></img>
        <h2>Model:{props.Model}</h2>
        <h2>Price:{props.Price}</h2>
        <h4>UpdatingSoftware:{props.UpdatingSoftware}</h4>
      </div>
  )
}

export default Mobile
