import { useState } from "react"

export default function Form({onAdd}){
    const [description, setDescription] = useState("")
    const [quantity, setQuantity] = useState(1)
    
    
    function handleSubmit(e){
        e.preventDefault()
        if (!description) return
        const item = {id: Date.now(), description, quantity, packed: false}
        onAdd(item)
        setDescription("")
        setQuantity(1)
    }
   
    return(
        <form className="add-form" onSubmit={handleSubmit}>
            <label>What do you need for your trip?</label>
            <select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                {Array.from({length:10},(_, i)=><option key={i} value={i+1}>{i+1}</option>)}
            </select>
            <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
            <button>Add</button>
        </form>
    )
}