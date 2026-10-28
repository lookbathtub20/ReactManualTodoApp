import { useState } from 'react'
import './App.css'
import { nanoid } from 'nanoid';
import Button from './component/Button';
import InputField from './component/InputField';
import TodoList from './component/TodoList';

function App() {
  const [todo,addTodo]=useState("");
  const [todoList,addTodoList]=useState([]);
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

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

  const handleEdit=(todoItem)=>{
    setEditingTodoId(todoItem.id)
    setEditedTitle(todoItem.title)
  }

  const handleSaveEdit=()=>{
    addTodoList(currentTodoList => currentTodoList.map(todoItem =>
      todoItem.id === editingTodoId ? { ...todoItem, title: editedTitle } : todoItem
    ))
    setEditingTodoId(null)
    setEditedTitle("")
  }

  const handleCancelEdit=()=>{
    setEditingTodoId(null)
    setEditedTitle("")
  }

  return (
    <>
      
      <br/>
      <InputField ariaLabel="Add a todo" value={todo} onChange={handleTodoChange} />
      <Button label="Add" onClick={handleButtonClick} />
      <TodoList
        todoList={todoList}
        editingTodoId={editingTodoId}
        editedTitle={editedTitle}
        onEdit={handleEdit}
        onEditedTitleChange={(e) => setEditedTitle(e.target.value)}
        onSaveEdit={handleSaveEdit}
        onCancelEdit={handleCancelEdit}
        onMarkAsCompleted={handleMarkAsCompleted}
        onDelete={handleDelete}
      />
    </>
  )
}

export default App
