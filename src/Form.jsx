import { useState } from "react"

export default function Form({onAddItem}){
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState(1)

    function handleSubmit(e){
        e.preventDefault()
        if (!description) return;
        const newItem = {description, amount, packed: false}
        onAddItem(newItem)
        setDescription("")
        setAmount(1)
    }

    return(
        <form className="add-form" onSubmit={handleSubmit}>
            <label>What do you need for your trip?</label>
            <select value={amount} onChange={(e)=>setAmount(Number(e.target.value))}>
                {[...Array(10)].map((_,i)=>(
                    <option value={i+1}>{i+1}</option>
                ))}
            </select>
            <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}></input>
            <button>Add</button>
        </form>
    )
}