export default function Item({item, onToggle, onDelete}){
    return(
            <li>
                <input type="checkbox" value={item.packed} onChange={()=>onToggle(item.id)}></input>
                <span style={item.packed? {textDecoration:"line-through"}:{}}>{item.quantity} {item.description}</span>
                <button onClick= {()=>onDelete(item.id)}>❌</button>
            </li>
    )
}