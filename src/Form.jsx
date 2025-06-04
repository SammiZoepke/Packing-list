export default function Form({item, amount, onAmount, onItem}){
    const handleAdd= ()=>{
        onItem(item)
        onAmount(amount)
        console.log({item})
        console.log({amount})
    }
    return(
        <div className="add-form">
            <label>What do you need for your trip?</label>
            <select value={amount} onChange={(e)=> onAmount(e.target.value)}>
                {[...Array(10)].map((_,i)=>(
                    <option value={i+1}>{i+1}
                    </option>
                ))}
                
            </select>
            <input type='text' value={item} onChange={(e)=> onItem(e.target.value)}></input>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}