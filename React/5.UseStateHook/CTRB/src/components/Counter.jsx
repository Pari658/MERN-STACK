import { useState } from 'react'
import './style.css'

function Counter(){
  const [count, setCount] = useState(0)
  return(
    <div>
      <div className="counter-box">
        <h2 className="counter-value">{count}</h2>
        <div className="counter-buttons">
          <button onClick={() => {setCount(count+1)}}>Increment</button>
          <button onClick={() => {setCount(count-1)}}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
