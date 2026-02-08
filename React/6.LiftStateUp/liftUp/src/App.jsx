import { useState } from 'react'
import './App.css'
import SearchFilter from './components/SearchFilter'


function App() {
  
   const items = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node",
    "MongoDB",
    "Express"
  ]

  const [search, setSearch] = useState("")

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
    <SearchFilter search = {search} setSearch = {setSearch}/>
    <ul>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        ) : (
          <li>No results found</li>
        )}
      </ul>
    </div>
  )
}

export default App
