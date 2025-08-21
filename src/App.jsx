import React from 'react'
import Pokemon from './Pokemon'
import Charmander from './Charmander'
import Weather from './Weather'
import Greeting from './Greeting'
import Style from './Style'
import { useState } from 'react'
import Counter from './Counter'
import Todolist from './Todolist'
import './pokemon-style.css';


const App = () => {

  const [count,setCount] = useState(0);


  return (
    <div>
       <Pokemon 
    img="https://th.bing.com/th/id/R.be7dc5ce53cfa8a81d01d3389d194903?rik=oOB6w3FJzFE%2fSg&riu=http%3a%2f%2fimages1.wikia.nocookie.net%2f__cb20120603213351%2fsonicpokemon%2fimages%2f7%2f77%2fPikachu.png&ehk=VVTC9cQzEhHMBY8XFXKUobgLXiVtu57CyEKfOTvekGs%3d&risl=&pid=ImgRaw&r=0"

    name="pickachu"
    type="⚡electric"
    trainer="Ashi-boy"
    
    />

    < Charmander 
    img="https://tse1.mm.bing.net/th/id/OIP.1huBUiOnn0uqJSmAYEJZkQHaI4?rs=1&pid=ImgDetMain&o=7&rm=3"
    name="Charmander"
    type="🔥 Fire"
    trainer="Ashi-boy"
    
    /> 
     < Weather 
    temperature = {22}
    />
    < Greeting 
    greet="mornin"
    />

    <Style />

    < Counter count={count} IncHandler={() => setCount(count +1) }
              decount={count} DecHandler={() => setCount(count -1) } />
    
    {/* < Todolist /> */}

    
    
    
    </div>
  )
}

export default App