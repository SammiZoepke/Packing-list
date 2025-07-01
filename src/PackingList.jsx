import Item from "./Item"
import { useState } from "react"

export default function PackingList({itemList, onToggle, onDelete, onClear}){
    const [sortBy, setSortBy]= useState("input")
    let sortedItems
    if (sortBy === "input") sortedItems = itemList
    if (sortBy === "description") sortedItems = itemList.slice().sort((a, b)=> a.description.localeCompare(b.description))
    if (sortBy === "packed") sortedItems = itemList.slice().sort((a, b)=> Number(a.packed) - Number(b.packed))
    
        return(
        <div className="list">
        <ul>
            {sortedItems.map((item)=>(
            <Item item={item} onToggle={onToggle} onDelete={onDelete} key={item.id}/>))}
        </ul>
        <q></q>
        <div className="actions">
        <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClear}>Clear List </button>
        </div>
        </div>    
    )
}