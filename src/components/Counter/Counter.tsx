import React, { useState } from 'react'

const Counter: React.FunctionComponent = () => {
  const [counter, setCounter] = useState(0)
  return (
    <>
      <button onClick={() => setCounter(counter - 1)}>Minus</button>
      Clicked {counter} times!
      <button onClick={() => setCounter(counter + 1)}>Add</button>
    </>
  )
}

export default Counter
