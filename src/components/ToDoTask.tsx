// @ts-ignore
const ToDoTask = (props: any) => {
    const handleRemove = (event: any) => {
        event.preventDefault()

        for (const element of event.target) {
            if (element.id === 'task') {
                props.setTodo((prev: any[]) => {
                    return [...prev.filter(elemen => elemen.todo !== element.value)];
                })

                let todos = localStorage.getItem('todos')
                let todosArray: any[] = []
                if (todos) {
                    todosArray = JSON.parse(todos)
                }

                todosArray = todosArray.filter(el => el.todo !== element.value)

                localStorage.setItem('todos', JSON.stringify(todosArray))

            }
        }
    }

    return <div>
        <form onSubmit={handleRemove}>
        <input type="text" name="task" id="task" disabled={true} value={props.element.todo}/>
        <input type="checkbox" name="done" id="done" defaultChecked={props.element.done === 'true'}/>
        <input className="btn btn-primary" type="submit" name="remove" id="remove" value="-"/></form>
    </div>
}

export default ToDoTask;