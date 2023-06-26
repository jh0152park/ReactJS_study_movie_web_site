import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const onChange = (event) => setTodo(event.target.value);
  console.log(todo);

  return (
    <div>
      <form>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do..."
        ></input>
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
