import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome start to react!</h1>
      <Button text={"Click Me"} />
    </div>
  );
}

export default App;
