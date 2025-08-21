import React from 'react'
import { useState } from 'react'

const Todolist = () => {
    const [todos, setTodos] = useState([])
    const [inputValue, setInputval] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault();
        setTodos([...todos,inputValue]);
        setInputval("");
    }

    const handleChange = (e) =>{
        setInputval(e.target.value)
    }

  return (
    <div>
        <h1 >Todo List :</h1>
        <form  onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={handleChange} placeholder='Add new todo' />
            <button type="submit">Add todo</button>
        </form>

        <ul>
            {todos.map((todos, index) =>(
                <li key={index}>{todos}</li>
            ))}
        </ul>
    </div>
  )
}

export default Todolist