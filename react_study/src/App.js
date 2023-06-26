import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => setTodo(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }

    setTodos((currentTodos) => [...currentTodos, todo]);
    setTodo("");
  };

  console.log(todos);

  return (
    <div>
      <h1>My Todo Lists({todos.length})</h1>

      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        ></input>
        <button>Add To Do</button>
      </form>

      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
