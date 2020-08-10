import React, { useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);

  const add = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div class="container">
      <h2>{count}</h2>
      <button onClick={add}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Test;
