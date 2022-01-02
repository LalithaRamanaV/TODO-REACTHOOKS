
import "./List.css";

function List (props) {
  return <div>
  {props.itemList.map(itemObj =>{
   return (
     <div className="item">
     <p>{itemObj.item}</p>
     <button>❌</button>
     </div>
   )
  })}
  </div>

}
export default List