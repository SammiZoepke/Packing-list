export default function Item({item, onToggle}){
    return(
            <li>
                <input type="checkbox" value={item.packed} onChange={(e)=>onToggle(item.id)}></input>
                <span style={item.packed? {textDecoration:"line-through"}:{}}>{item.quantity} {item.description}</span>
                <button>❌</button>
            </li>
    )
}