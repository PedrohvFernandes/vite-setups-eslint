import { useState } from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
       <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
