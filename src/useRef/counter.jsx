import { useRef, useState } from "react";

export default function Counter() {
  const countRef = useRef(0);
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(countRef.current += 1)
  
    console.log("state:",count)
    console.log("ref:",countRef.current)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}