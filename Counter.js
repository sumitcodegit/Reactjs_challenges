import React, { useRef, useState } from "react";
import "./Main.css";

function Counter() {
  const [value, setValue] = useState(0);
  const step = useRef(1);

  const setStep = (value) => {
    step.current = value;
  };

  const increment = () => {
    setValue((state) => state + step.current);
  };

  const decrement = () => {
    setValue((state) => state - step.current);
  };

  const reset = () => {
    setValue(0);
  };

  return (
    <main >
      <h2>{value}</h2>

      <section>
        <button onClick={decrement} aria-label="Decrement">
          -
        </button>
        <button onClick={increment} aria-label="Increment">
          +
        </button>
      </section>

      <section>
        <label htmlFor="step">Increment/Decrement by</label>
        <input
          type="number"
          id="step"
          defaultValue={step.current}
          onChange={(e) => setStep(e.target.valueAsNumber)}
          title="Step value"
        />
      </section>

      <section>
        <button onClick={reset}>Reset</button>
      </section>
    </main>
  );
}

export default Counter;
































// import React, { useState } from "react";
// // import "./main.css";

// function Counter(){
// const [input,setInput]=useState(1)
// const [no,setNo]=useState(1)



// const handleChange = (e) => {
//     setInput((prevState) =>
//         e.target.value === "addition" ? (prevState + no) :( prevState - no)
//     );
// };

//     return(
//         <div>
//         <h1>{input}</h1>
//         <button value="addition" onClick={(e)=>handleChange(e)}>+</button>
//         <button value= "substraction "onClick={(e)=>handleChange(e)}>-</button>
//         <input type="number" value={no} onChange={(e)=>setNo(e.target.valueAsNumber)}/>
//         <button onClick={()=>setInput(0)}>Reset</button>
//         </div>
//         )
// }

// export default Counter



