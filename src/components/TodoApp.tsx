"use client"

import { addTodo, getAllTodos } from "@/utils/supabaseFunctions"
import { FormEvent, useEffect, useState } from "react"
import TodoList from "./TodoList"

const TodoApp = () => {

    const [todos, setTodos] = useState<any>([])
    const [title, setTitle] = useState("")

    const fetchTodos = async () => {
        try {
            const res = await getAllTodos();
            setTodos(res)
        } catch (error) {
            console.error("Error fetching todos:", error)
        }
    }
    
    useEffect(() => {
        fetchTodos()
    }, [])
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(e)
        await addTodo(title)

        if (title.trim()) {
            setTimeout(() => {
                setTitle("")
            }, 500)
            fetchTodos()
        }
    }

  return (
    <section className="text-center mb-2 pt-5 text-2xl font-medium h-screen">
        <h3>Supabase Todo App</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
                type="text" 
                className="mr-2 shadow-lg p-1 outline-none"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />
            <button className="shadpw-md border-2 p-1 rounded-lg bg-green-200">Add</button>
        </form>
        <TodoList todos={todos} fetchTodos={fetchTodos} />
    </section>
  )
}

export default TodoApp