import { useState } from "react"
import './App.css'
import ValentineCard from './components/ValentineCard'
import Card1 from "./components/Card1"
import Card2 from "./components/Card2"

function App() {
  const [invite , setInvite] = useState(" ")

  function handleYes(){
    setInvite(true)
  }
  function handleNo(){
    setInvite(false)
  } 

  return (
    <>
     {invite === " " && <ValentineCard  handleYes= {handleYes} handleNo= {handleNo}/>}
     {invite === true && <Card1 />}
     {invite === false && <Card2 handleYes ={handleYes}/>}
    </>
  )
}

export default App
