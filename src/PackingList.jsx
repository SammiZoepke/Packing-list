import Item from "./Item"

export default function PackingList({itemList, onHandleToggle}){

    return(
        <div className="list">
        <ul>
            {itemList.map((item)=>
            <Item item={item} key={item.id} onHandleToggle={onHandleToggle}/>
            )}
            
        </ul>
        </div>    
    )
}