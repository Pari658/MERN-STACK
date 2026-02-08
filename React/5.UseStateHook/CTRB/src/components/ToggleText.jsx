import { useState } from 'react'
import './style.css'

function ToggleText(){

  const[show,setShow] = useState(true)

  return(
    <div>
      <div className="toggle-box">
        <p className="toggle-text" style={{ display: show ? "block" : "none" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dignissimos, qui nihil dolorem consequatur asperiores dolores quis, placeat culpa voluptates voluptas. Veritatis consectetur placeat facilis et! Placeat inventore consequatur unde.</p>

        <div className="toggle-buttons">
          <button onClick={() => {setShow(false)}}>Hide</button>
          <button onClick={() => {setShow(true)}}>Display</button>
        </div>
      </div>
    </div>
  )
}

export default ToggleText
