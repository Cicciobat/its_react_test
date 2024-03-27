import {useState} from "react";

interface ToDO {
    todo: string | undefined;
    done: string;
}

// @ts-ignore
const ToDoAdd = ({setTodos}) => {
    const [todo, setTodo] = useState<string | undefined>()

    const handleSubmit = () => {
        let todos = localStorage.getItem('todos')
        let tempTodo: ToDO = {
            todo,
            done: 'false'
        }

        if (!todos) {
            let todosArray: ToDO[]  = []
            todosArray = [...todosArray, tempTodo]

            localStorage.setItem('todos', JSON.stringify(todosArray))
        } else {
            let todosCached: ToDO[] = JSON.parse(todos)
            todosCached = [...todosCached, tempTodo]
            setTodos((prev: any) => [...prev, tempTodo])
            localStorage.setItem('todos', JSON.stringify(todosCached))
        }
    }

    return <div>
        <input type="text" onChange={event => setTodo(event.target.value)}/>
        <input type="button" value='+' onClick={handleSubmit}/>
    </div>
}

export default ToDoAdd