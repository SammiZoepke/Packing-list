import Item from "./Item"

export default function PackingList({itemList}){
    return(
        <div className="list">
        <ul>
            {itemList.map((item)=>(
            <Item item={item}/>))}
        </ul>
        
        <div className="actions">
        <select>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
        </select>
        <button>Clear List </button>
        </div>
        </div>    
    )
}