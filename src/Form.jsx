export default function Form(){

    return(
        <div className="add-form">
            <label>What do you need for your trip?</label>
            <select>
                {[...Array(10)].map((_,i)=>(
                    <option value={i+1}>{i+1}
                    </option>
                ))}
                
            </select>
            <input type='text'></input>
            <button>Add</button>
        </div>
    )
}