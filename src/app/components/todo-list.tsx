import { api } from "~/trpc/server";

export async function TodoList() {
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
}
