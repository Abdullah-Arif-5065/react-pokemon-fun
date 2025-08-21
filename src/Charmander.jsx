import React from 'react'

const Charmander = ({img,name,type,trainer}) => {
  return (
    <div>
        <img src={img} alt={name} width={300} />
        <h1>Name : {name}</h1>
        <h2>Type :{type}</h2>
        <h2>Trainer : {trainer}</h2>
    </div>
  )
}

export default Charmander