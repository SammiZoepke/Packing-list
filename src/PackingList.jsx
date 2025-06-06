import Item from "./Item"

export default function PackingList({itemList, onHandleToggle, onDelete}){

    return(
        <div className="list">
        <ul>
            {itemList.map((item)=>
            <Item item={item} key={item.id} onHandleToggle={onHandleToggle} onDelete={onDelete}/>
            )}
            
        </ul>
        </div>    
    )
}