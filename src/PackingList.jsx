export default function PackingList({item, amount}){
    const itemAdded = []
    return(
        <ul className="list">
            <li>
            <input type="checkbox"></input>
            {amount} 
            {item}
            <button>❌</button>
            </li>
        </ul>
            
            
    )
}