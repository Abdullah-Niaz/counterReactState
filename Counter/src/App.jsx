import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increaseValue = () => {
    //  it's goes as a package now, from 10 - 14 lines it acts as a one state change
    //  it's goes as a package now, from 10 - 14 lines it acts as a one state change
    setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    // it's goes as a package now it takes the preious state value in call back and update it
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
    // setCount(prevCount => prevCount + 1);
  };

  const decreaseValue = ()=>{
    if(count > 0 ){
      setCount(count - 1);
    }
    else{
      alert("You can't Decrement Beyond 0")
    }
  }
  return (
    <>
      <div className="text-white">
        <h1>Counter</h1>
        <h2 className="mt-5">Counter Value: {count}</h2>
        <div className="flex px-10 space-x-5">
          <button className="bg-black text-white mt-10" onClick={increaseValue}>
            Increase
          </button>
          <button className="bg-black mt-10" onClick={decreaseValue}>
            Decrease
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
