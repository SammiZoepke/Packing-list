export default function Stats({itemList}){
    if (!itemList.length)
        return(
        <p className="stats">Let's start packing for your trip✈️</p>
        )
    const numItems = itemList.length
    const packedItems = itemList.filter(item=>item.packed).length
    const percentageItems = Math.round(packedItems / numItems * 100)
    return(
        <footer className="stats">
            <p>{percentageItems === 100 ?"You are all packed and ready to go!✈️" :`You have ${numItems} items, and have packed ${packedItems} items(${percentageItems}%)`}</p>
        </footer>
    )
}