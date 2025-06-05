import Item from "./Item"


export default function PackingList(){
    const initialItems = [
  {id:1, description:"Passports", quantity:2, packed: false},
  {id:2, description:"Shoes", quantity:1, packed: false}
]
    return(
        <div className="list">
        <ul>
            {initialItems.map((item)=>
            <Item item={item}/>
            )}
            
        </ul>
        </div>    
    )
}