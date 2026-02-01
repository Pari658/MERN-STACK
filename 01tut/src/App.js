import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {

  const[items,setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "item 1"
    },
    {
      id: 2,
      checked: false,
      item: "item 2"
    },
    {
      id: 3,
      checked: false,
      item: "item 3"
    },
     {
      id: 4,
      checked: false,
      item: "item 4"
    }
    
  ])

  //tick mark funciton..
    const handleCheck = (id) => {
      // console.log(`key : ${id}`)
      const listItems = items.map((items) => items.id === id ? { ...items,checked : !items.checked} 
    : items);
      setItems(listItems)
      localStorage.setItem('shoppinglist',JSON.stringify(listItems))    
    }
   // delete function...
  
     const  handleDelete = (id) => {
      // console.log(id)
      const listItems = items.filter((item) => item.id !== id);
      setItems(listItems)
      localStorage.setItem('shoppinglist',JSON.stringify(listItems)) 
     } 
  



  // return jsx...
  return (
    <div className="App">
       <Header title="Grocery list" />
       <Content items = {items}  handleCheck = {handleCheck} handleDelete = {handleDelete}/>
       <Footer length = {items.length} />
    </div>
  );
}

export default App;
