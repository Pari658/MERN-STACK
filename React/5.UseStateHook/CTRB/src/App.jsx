import { useState } from 'react'
import './App.css'

import Counter from './components/Counter'
import BgChanger from './components/BgChanger'
import ToggleText from './components/ToggleText'
import RealUI from './components/RealUI'

function App() {
  return (
    <div className='app-container'>
      <Counter />
      <BgChanger />
      <ToggleText />
      <RealUI />
    </div>
  )
}

export default App
