export default function Stats({itemList}){
    if (!itemList.length){
        return (
            <p className="stats">You have nothing to pack. Let's get started</p>
        )
    }
    const numItems = itemList.length
    const numPacked = itemList.filter((item)=> item.packed).length
    const percentage = Math.round(numPacked / numItems * 100)
    return(
        <footer className="stats">
            <p>{percentage ===100 ? "Everything is packed and you are ready to go" :`You have ${numItems} items on your list, and you already packed ${numPacked} (${percentage}%)`}</p>
        </footer>
    )
}