import React from 'react'
import '../Card2.css'
import { useState } from 'react'

function Card2(props) {
  const [noButtonPos , setNoButtonPos] = useState({top : "0px", left : "0px"})
  function moveNoButton(){
    const x= Math.random() *200 -100
    const y= Math.random() *200 -100
    setNoButtonPos({
      top : `${x}px`,
      left : `${y}px`
    })

  }
  return (
      <div className='container-div'>
        <div className='message-div'>
             <h4>Please don't break my heart 💔. 
                Be my valentine partner
             </h4>
        </div>
        <div className='btn-div'>
            <button className='btn' onClick={()=> props.handleYes()}> Yes ❤️ </button>
            <button className='btn' style ={{transform : `translate(${noButtonPos.top},${noButtonPos.left})`}} onMouseEnter={moveNoButton} onClick={(e)=> e.preventDefault()} > No 💔</button>
        </div>
      
    </div>

  )
}

export default Card2
