import { useState } from "react";
import Itemlist from "./Itemlist"
// const Content = () => {

//     const[name,setName] = useState('Pari') 
//     const[count,setCount] = useState(0);

//     //show count function :
//     const showCount = () => {
//       setCount(count + 1);
//       console.log(count);
//     }

//     // random name change function..
//     const handleNameChange = () => {
//       const names = ["pari" , "uday" ,"harvi" , "jani" ,"dhruvil" ,"harmi" ,"neel"];
//       const i = Math.floor(Math.random() * 7);
//       setName(names[i]);
//     }

//     //handle click function...
//     const handleClick = () =>{
//       console.log('you clicked it pari')
//     }
    
//     //parameters based function..
//     const handleClick2 = (name) =>{
//       console.log(`you clicked it ${name}`)
//     }
//     // const name_frined = handleNameChange()

//   return(
//     <main>
//         <p>Hello {name} !</p>
//         <p>Count : {count}</p>
//         <button onClick={handleNameChange}>click me</button><br />
//         <button onClick={() => handleClick2(name)}>click me2</button><br />
//         <button onClick={() => showCount()}>increase me</button>
//     </main>
//   )

//   }

const Content = ({ items, handleCheck, handleDelete }) =>{

  return (
    <main>
      {items.length  ? (
        <Itemlist  
            items = {items}
            handleCheck={handleCheck} 
            handleDelete={handleDelete} 
          />
      ) : (
        <p>There is no items in the list</p>
      )}
    </main>
  )
}
export default Content