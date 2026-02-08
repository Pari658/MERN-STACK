import { useState } from 'react'
import './style.css'

function BgChanger(){
  
  const[bgColor,SetbgColor] = useState("white")

  return(
    <div>
      <div className="bg-box" style={{backgroundColor : bgColor}} >
        <h2>Background Changer</h2>

        <div className="bg-buttons">
          <button onClick={() => {SetbgColor("red")}}>Red</button>
          <button onClick={() => {SetbgColor("green")}}>Green</button>
          <button onClick={() => {SetbgColor("blue")}}>Blue</button>
          <button onClick={() => {SetbgColor("white")}}>white</button>
        </div>
      </div>
    </div>
  )
}

export default BgChanger
