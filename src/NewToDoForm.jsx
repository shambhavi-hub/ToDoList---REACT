import { useState } from "react"

export function NewToDoForm({ onSubmit }/*props*/){
    // props.onSubmit
    onSubmit
    // useState("")
    const [newItem, setNewItem] = useState("")
    // newItem = "jsebfj"
    // setNewItem = "njkesnbf"

    function handleSubmit(e){
        e.preventDefault()
    
        // setTodos([...todos,//1
        //   {id: crypto.randomUUID(), 
        //   title:newItem, 
        //   completed:false},])
    
        //   setTodos([...todos,//2
        //     {id: crypto.randomUUID(), 
        //     title:newItem, 
        //     completed:false},])
    
        /*
        By the above mentioned setTodos doesn't get updated with the existing values rather it is getting overridden by the latest input.
        To overcome this, (i.e) If we want to modify the existing data we need to actually pass a function to our set State, the "setTodos".
         kindly follow the below. 
        */
        //  setTodos((currentTodos) => {
        //   return [...currentTodos,
        //     {id: crypto.randomUUID(), 
        //     title:newItem, 
        //     completed:false},
        //   ]
        // })
         
        // addToDo(newItem)
       // props.onSubmit(newItem)
       onSubmit(newItem)
       setNewItem("")
       
      }
    
    
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input 
          type="text" 
          value={newItem} 
          onChange={e =>setNewItem(e.target.value)} 
          id="item"></input>
        </div>
        <button className="btn">Add</button>
      </form>
    )
}