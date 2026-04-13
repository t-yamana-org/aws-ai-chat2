import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { twMerge } from "tailwind-merge";

const client = generateClient<Schema>();

function Welcome(props: { name: string }) {
  return <h1>こんにちは、{props.name}さん</h1>;
}

interface Props {
  name: string;
  age: number;
}

const UserProfile: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold underline">{name}</h2>
      <p>年齢: {age} 歳</p>
    </div>
  );
};

function MergeTestButton({ className }: { className?: string }) {
  return (
    <button className={twMerge("px-4 py-2 bg-blue-500 text-white", className)}>
      スタイルマージボタン
    </button>
  );
}

function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  return (
    <main>
      <h1>My todos</h1>
      <Welcome name="Alice" />
      <UserProfile name="Bob" age={35} />
      <MergeTestButton className="px-6 bg-red-500" />
      <button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
    </main>
  );
}

export default App;
