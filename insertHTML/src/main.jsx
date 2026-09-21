import { createRoot } from 'react-dom/client'

function Football(){
  const shoot=(a, b)=>{
    alert(b.type);
  }

  return (
    <button onClick={(event)=>shoot("Goal!", event)}>Take the Shot</button>
  );
}

createRoot(document.getElementById('root')).render(
  <Football/>
)
