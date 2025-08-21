import React from 'react'

const Greeting = ({greet}) => (
  <h1>
    { greet === "morning" ? "good morning" : greet ==="afternoon" ?  "good afternoon" : greet ==="evening" ? "good evening" : "good night" }
  </h1>
)

export default Greeting