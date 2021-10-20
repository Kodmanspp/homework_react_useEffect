import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const Todo = ({ id }) => {
    const [todos, setTodos] = useState({});

    useEffect(() => {
        async function fetchTodo(id) {
            const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            const newTodo = await response.json();
            setTodos(newTodo);
        }
        fetchTodo(id)
    }, [id])

    return (
        <div>
            <h1>Curent Todo</h1>
            <p>{todos.title}</p>
        </div>
    )
}

export default Todo;