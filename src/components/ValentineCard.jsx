import Heart from "./Heart"
import '../Heart.css'
import '../ValentineCard.css'



function ValentineCard(props) {
  
  return (
    <div className='container-div'>
        <div className='message-div'>
            <h4>Hey beautiful! Will you be my valentine? <Heart /> </h4>
        </div>
        <div className='btn-div'>
            <button className='btn' onClick={()=> props.handleYes()}> Yes ❤️ </button>
            <button className='btn' onClick={()=> props.handleNo()}> No 💔</button>
        </div>
      
    </div>
  )
}

export default ValentineCard
