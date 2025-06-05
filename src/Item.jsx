export default function Item({item, onHandleToggle}){
    return(
            <li>
                <input type="checkbox" onChange={()=>onHandleToggle(item.id)}></input>
                <span style={item.packed ? {textDecoration: 'line-through'}: {}}>{item.amount} {item.description}</span>
                <button>❌</button>
            </li>
    )
}