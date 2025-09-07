// src/components/Counter.jsx
import { useState } from "react";

function Counter() {
  // state starts at 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ maxWidth: 360, margin: "48px auto", textAlign: "center" }}>
      <h2>Simple Counter</h2>

      {/* display current count */}
      <p style={{ fontSize: 24, margin: "16px 0" }}>Current Count: {count}</p>

      {/* actions */}
      <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
        <button onClick={() => setCount((c) => c + 1)}>Increment</button>
        <button onClick={() => setCount((c) => c - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
