import { useEffect, useState } from "react"
import Todo from "../Todo/Todo";

export default function Counter() {



    const [count, setCount] = useState(0);


    function handleIncrement() {
        setCount(count + 1);
    }
    function handleDicrement() {
        setCount(count - 1);
    }
    useEffect(() =>{
        const raw = localStorage.getItem("storageCount") || []
        setCount(JSON.parse(raw)); 
    },[]);
    
    useEffect(() =>{
        localStorage.setItem("storageCount", JSON.stringify(count))
    },[count]);

    return (
        <div>
            <button onClick={handleIncrement}>+</button>
            <h1>{count}</h1>
            <button onClick={handleDicrement}>-</button>
            <Todo
                id={count}
            />
        </div>
    )
}