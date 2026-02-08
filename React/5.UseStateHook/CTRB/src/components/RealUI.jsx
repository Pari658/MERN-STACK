import { useState } from 'react'
import './style.css'

function RealUI(){

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")
  const [about, setAbout] = useState("")

  return(
    <div>
      <div className="realui-box">
        <h2>Live Preview</h2>

        <div className="realui-inputs">
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter your role"
            onChange={(e) => setRole(e.target.value)}
          />

          <textarea
            placeholder="Write something about yourself"
            onChange={(e) => setAbout(e.target.value)}
          ></textarea>
        </div>

        <div className="realui-preview">
          <h3>Preview</h3>
          <p><strong>Name:</strong> {name || ""}</p>
          <p><strong>Email:</strong> {email || ""}</p>
          <p><strong>Role:</strong> {role || ""}</p>
          <p><strong>About:</strong> {about || ""}</p>
        </div>
      </div>
    </div>
  )
}

export default RealUI
