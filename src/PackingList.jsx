import Item from "./Item"
import { useState } from "react"

export default function PackingList({itemList, onHandleToggle, onDelete}){
    const [sortedList, setSortedList] = useState('input')
    
    let sortedItems;
    if (sortedList === 'input') sortedItems = itemList;
    if (sortedList === "description") sortedItems = itemList.slice().sort((a,b)=>a.description.localeCompare(b.description))
    if (sortedList === "packed") sortedItems = itemList.slice().sort((a,b)=>Number(a.packed)-Number(b.packed))
    return(
        <div className="list">
        <ul>
            {sortedItems.map((item)=>
            <Item item={item} key={item.id} onHandleToggle={onHandleToggle} onDelete={onDelete}/>
            )} 
        </ul>
        <div className="actions">
        <select value={sortedList} onChange={(e)=>setSortedList(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
        </select>
        <button>Clear List </button>
        </div>
        </div>    
    )
}