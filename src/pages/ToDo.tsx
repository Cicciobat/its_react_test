import ToDoAdd from "../components/ToDoAdd";
import {useState} from "react";
import ToDoTask from "../components/ToDoTask";

const ToDo = () => {
  let todos = localStorage.getItem('todos')
  let todosArray: any[] = []
  if (todos) {
    todosArray = JSON.parse(todos)
  }


  const [todo, setTodo] = useState(todosArray)



  const handleLogout = () => {
    localStorage.setItem('isLogged', 'false')
  }

    return <>
      <input className="btn btn-primary" type="button" value="Logout" onClick={handleLogout}/>
        <ToDoAdd setTodos={setTodo}/>
      {todo && todo.map((element: any) => (<ToDoTask element={element} setTodo={setTodo}/>))}
    </>
}

export default ToDo;