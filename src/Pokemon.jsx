import React from 'react'

const Pokemon = ({img,name,type,trainer}) => {
  return (
    <div>
        <img src={img} alt={name} width={400} />
        <h1>Name : {name}</h1>
        <h2>Type :{type}</h2>
        <h2>Trainer : {trainer}</h2>
    </div>
  )
}

export default Pokemon