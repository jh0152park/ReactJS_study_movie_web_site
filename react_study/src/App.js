import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [keywords, setKeywords] = useState("");

  const onClick = () => setCount((prev) => prev + 1);
  const onChange = (event) => setKeywords(event.target.value);

  useEffect(() => {
    console.log("keyword!");
  }, [keywords]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Click</button>
      <input
        value={keywords}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      ></input>
    </div>
  );
}

export default App;
