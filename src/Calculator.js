import { useContext } from "react";
import { NumberContext } from "./App";

function Calculator() {
    const numberContext = useContext(NumberContext);
    return ( <>
    <div className='countDiv'>Sayı = {numberContext.count}</div>
        <div className="buttonDiv">
        <button onClick={() => numberContext.dispatch('Artır')} >Arttır</button>
        <button onClick={() => numberContext.dispatch('Azalt')} >Azalt</button>
        <button onClick={() => numberContext.dispatch('Sıfırla')} >Sıfırla</button>
        </div> </> ); 
};

export default Calculator;