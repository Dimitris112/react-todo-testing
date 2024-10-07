import { useState } from "react";
import Form from "./Form";
import TodoList from "./Todolist";
export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}
