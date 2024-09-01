import { useState } from 'react';
import './App.css';

function App() {
  const[data,setData]= useState('')

  function showData(task){
    if(task === 'html')
      {
        setData('The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.')
      }
      else if(task === 'css')
        setData('Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.')
      else
      setData('JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.')

  }
  return (
    <div className="App">
      <button onClick={()=>showData('html')}>HTML</button>
      <button onClick={()=>showData('css')}>CSS</button>
      <button onClick={()=>showData('javascript')}>JavaScript</button>
      <br></br>
      <>
      {data}
      </>
    </div>
  );
}

export default App;
