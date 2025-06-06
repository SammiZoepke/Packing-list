export default function Item({item, onHandleToggle, onDelete}){
    return(
            <li>
                <input type="checkbox" onChange={()=>onHandleToggle(item.id)}></input>
                <span style={item.packed ? {textDecoration: 'line-through'}: {}}>{item.amount} {item.description}</span>
                <button onClick={()=>onDelete(item.id)}>❌</button>
            </li>
    )
}