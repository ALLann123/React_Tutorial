import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyCar(){
  const [car, setCar]=useState({
    brand:"ford",
    model:"mustang",
    year:1964,
    color:"red"
  });

  //update the object and maintain the default values. Use a JS spread operator
  const updateColor=()=>{
    setCar(previousState=>{
      return{...previousState, color:"blue"}
    });
  }

  return (
    <>
    <h1>My {car.brand}</h1>
    <p>
      It is a {car.color} {car.model} from {car.year}
    </p>

    <button type='button' onClick={updateColor}>Blue</button>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <MyCar />
);