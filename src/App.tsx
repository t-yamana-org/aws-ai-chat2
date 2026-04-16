import { RouterProvider } from "react-router";
import "./index.css";
import { router } from "./routes";

/**
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
 */

export default function App() {
  /**
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }
   */

  return <RouterProvider router={router} />;
}
