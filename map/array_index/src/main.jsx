import { createRoot } from 'react-dom/client'

const fruits=['apple', 'banana', 'mango'];

function App(){
  return (
    <ul>
      {fruits.map((fruit, index, array)=>{
        return (
          <li key={fruit}>
            Name: {fruit}, Index: {index}, Array: {array}
          </li>
        );
      })}
    </ul>
  );
}

createRoot(document.getElementById('root')).render(
  <App/>
)