import { deleteTodo } from "@/utils/supabaseFunctions";

type Props = {
    todos: { id: number; title: string }[]
    fetchTodos: () => void
}

const TodoList = ({ todos, fetchTodos }: Props) => {

    const handleDelete = async (id: number) => {
        await deleteTodo(id)
        fetchTodos()
    }

  return (
    <div>
      {
        todos.map(
            (todo) => (
                <ul key={todo.id} className="mx-auto">
                    <div className="flex bg-orange-200 rounded-md my-2 p-2 justify-between">
                        <li className="font-medium">✅ {todo.title}</li>
                        <span className="cursor-pointer" onClick={() => handleDelete(todo.id)}>✘</span>
                    </div>
                </ul>
            )
        )
      }
    </div>
  )
}

export default TodoList
