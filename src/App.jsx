import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid';

function App() {
  const [todo,addTodo]=useState("");
  const [todoList,addTodoList]=useState([]);

  /* {
    title:"Prepare for Interview"
    isCompleted:false/true   
}*/ 
  const handleTodoChange=(e)=>{//Arrow function
    addTodo(e.target.value)
  }
  const handleButtonClick=()=>{
    addTodoList(currentTodoList => [...currentTodoList, { id: nanoid(), title: todo, isCompleted: false }])
    addTodo("")
  }
  const handleMarkAsCompleted=(todoId)=>{
    addTodoList(currentTodoList => currentTodoList.map(todoItem =>
      todoItem.id === todoId ? { ...todoItem, isCompleted: true } : todoItem
    ))
  }

  const handleDelete=(itemId)=>{
    addTodoList(currentTodoList => currentTodoList.filter(item => item.id !== itemId))
  }

  return (
    <>
      <input type="text" value={todo} onChange={handleTodoChange}/>
      
      <button style={{marginLeft:10}} disabled={todo==""} onClick={handleButtonClick}>Add Todo</button>
      <div>Current todo: {todo}</div>
      <div>Current todoList: {JSON.stringify(todoList)}</div>
      <table border={1}>
        <thead>
          <tr>
          <th>
            Sl No.
          </th>
          <th>
            Todo Title
          </th>
          <th>
            Is Completed
          </th>
          <th>
            Action
          </th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todoItem,index)=>{
            return <tr key={todoItem.id}>
              <td>{index+1}</td>
              <td>{todoItem.title}</td>
              <td>{todoItem.isCompleted ? "Yes" : "No"}</td>
              <td>
                {!todoItem.isCompleted && <button onClick={() => handleMarkAsCompleted(todoItem.id)}>Mark as completed</button>}
                <button style={{marginLeft:10}} onClick={() => handleDelete(todoItem.id)}>Delete</button>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
