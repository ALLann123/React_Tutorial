import { createRoot } from 'react-dom/client'

function Greeting({name, age}){
  return <h1>Hello, {name}. You are {age} years old.</h1>
}
createRoot(document.getElementById('root')).render(
  <Greeting name="Doe" age={25}/>
)
