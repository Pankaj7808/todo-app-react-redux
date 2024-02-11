import React, { createContext, useState } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';

export const context = createContext(null)

function App() {


  const[active, setActive] = useState(false)
  const[completed, setCompleted] = useState(false)


  return (
    <context.Provider value={{active, setActive, completed,setCompleted}}>
      <div className="App">
        <TodoContainer/>
      </div>
    </context.Provider>

  );
}

export default App;
