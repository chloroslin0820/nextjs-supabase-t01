import { supabase } from "./supabase"

export const getAllTodos = async () => {
    const res = await supabase.from("todo_app").select("*")
    return res.data
}

export const addTodo = async (task: string) => {

    await supabase
        .from("todo_app")
        .insert({ title: task })
}

export const deleteTodo = async (id: number) => {

    await supabase
        .from("todo_app")
        .delete()
        .eq("id", id)
}
  