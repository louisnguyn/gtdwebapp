"use client"; 
import React, { useState } from "react";
import { api } from "~/trpc/server";
import "./index.css";

/* export async function TodoList() {
  const todos = await api.todo.todos();

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className={todo.done ? "line-through" : ""}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
}  */
/* export const TodoList = async () => {
}
  */
export function TodoList() {
  const[tasks, setTasks] = useState([{text:'', checked: false}]);
  const [newTask, setNewTask] = useState("");
  function handleInputChange(e: { target: { value: React.SetStateAction<string>; }; }){
    setNewTask(e.target.value);

  }
  function addTask(){
    if(newTask.trim() !== ""){
    setTasks(t =>[...t, {text: newTask, checked: false}]);
    setNewTask("");
    }

  }
  function deleteTask(index: number){
    const updatedTasks = tasks.filter((_, i) => i!==index)
    setTasks(updatedTasks);
  }
  function moveTaskUp(index: number){
    if(index > 0){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
      setTasks(updatedTasks);
  }
}
  function moveTaskDown(index: number){
    if(index < tasks.length - 1){
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index+1]] 
      = [updatedTasks[index+1], updatedTasks[index]];
      setTasks(updatedTasks);
  }

  }
  function toggleCheck(index: number) {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  }
 

  return(
    <div className="todo-list">
      <div>
        <input type ="text"
      placeholder ="Please enter a task"
      value ={newTask}
      onChange={handleInputChange}/>
      <button className="add-button"
      onClick={addTask}>
        Add</button>
      </div>
      <ol>
        {tasks.map((task, index) =>
        <li key={index} className={task.checked ? 'task-completed':''}>
          <input type="checkbox" checked={task.checked} onChange={() => toggleCheck(index)} />
          <span className="text">{task.text}</span>
          <button
          className="delete-button"
          onClick={()=>deleteTask(index)}>
            Delete
          </button>
          <button
          className="move-button"
          onClick={()=>moveTaskUp(index)}>
            ⬆️
          </button>
          <button
          className="move-button"
          onClick={()=>moveTaskDown(index)}>
            ⬇️
          </button>
          
        </li>
      )}
      </ol>
    </div>
  )
}
export default TodoList;

