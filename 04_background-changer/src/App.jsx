import { useState } from "react";
import "./App.css";

function App() {
  const [ color , setColor ] = useState('olive')
  return <>
  <div className="w-full h-screen duration-200 text-center" style={{backgroundColor: color}}>
<h1 className="text-xl font-semibold pt-12">Background Color Changer on Clicking</h1>
<div className="flex justify-center flex-wrap inset-x-0 fixed bottom-11 ">
  
  <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    <button onClick={()=> setColor('red')} className="outline-none px-4  py-1 shadow-lg rounded-full text-white" style={{backgroundColor: 'red'}}> Red</button>
    <button onClick={()=> setColor('yellow')} className="outline-none px-4  py-1 shadow-lg rounded-full text-white" style={{backgroundColor: 'yellow'}}> Yellow</button>
    <button onClick={()=> setColor('purple')} className="outline-none px-4  py-1 shadow-lg rounded-full text-white" style={{backgroundColor: 'purple'}}> Purple</button>
    <button onClick={()=> setColor('blue')} className="outline-none px-4  py-1 shadow-lg rounded-full text-white" style={{backgroundColor: 'blue'}}> Blue</button>
    <button onClick={()=> setColor('green')} className="outline-none px-4  py-1 shadow-lg rounded-full text-white" style={{backgroundColor: 'green'}}> Green</button>
    <button onClick={()=> setColor('orange')} className="outline-none px-4  py-1 shadow-lg rounded-full text-white" style={{backgroundColor: 'orange'}}> Orange</button>
    <button onClick={()=> setColor('gray')} className="outline-none px-4  py-1 shadow-lg rounded-full text-white" style={{backgroundColor: 'grey'}}> Gray</button>
    <button onClick={()=> setColor('black')} className="outline-none px-4  py-1 shadow-lg rounded-full text-white" style={{backgroundColor: 'black'}}> Black</button>
   
  </div>
</div>
  </div>
   
  
  </>;
}

export default App;
