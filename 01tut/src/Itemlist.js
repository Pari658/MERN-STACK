import {FaTrashAlt} from "react-icons/fa"


const Itemlist = ({items, handleCheck, handleDelete}) =>{
  return(
    <ul>

          {items.map((item) => (

            <li className="item" key={item.id}>
              <input type="checkbox"  checked ={item.checked} onChange={() => handleCheck(item.id)}/>
              <label onDoubleClick={() => handleCheck(item.id)}
                >{item.item}</label>
              {/* <button>Delete</button> */}
              <FaTrashAlt role="button" tabIndex="0" onClick={() => handleDelete(item.id)}/>
            </li>
            
          ))}

        </ul>
  )
}
export default Itemlist