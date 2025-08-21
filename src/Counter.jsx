import React from 'react'

const Counter = ({count,IncHandler,DecHandler}) => {
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={IncHandler}>Increment</button>
        <button onClick={DecHandler}>Decrement</button>
    </div>
  )
}

export default Counter