import './App.css';
import React ,{ useReducer } from 'react';
import Calculator from './Calculator';

export const NumberContext = React.createContext();

const initialValue = 0;
  const reducer = (state , action) => {
    switch(action){
      case 'Artır' : 
      return state + 1;
      case 'Azalt' : 
      return state - 1;
      case 'Sıfırla' : 
      return initialValue;
      default:
        return state;
    }
  }

function App() {
  
  const [ count, dispatch ] = useReducer(reducer, initialValue);
  return (
    <div className="App">
      <NumberContext.Provider value={{count : count , dispatch : dispatch}}>  
        <Calculator/>
      </NumberContext.Provider>
    </div>
  );
}

export default App;
