import { useState } from "react";
import "./App.css";
import Main from "./Components/Main";

import { myData } from "./Data/myData";

function App() {

  const [myVar,setMyVar] = useState('Ravindu')
  const clickHandle = () => {
    setMyVar('Hasaranga');
    console.log(myVar);
  }; 

  const MainBlock = myData.map(({ id, name, city, Position, image }) => {
    return (
      <Main
        key={id}
        name={name}
        city={city}
        Position={Position}
        image={image}
      />
    );
  });
  return (
    <div className="main_container">
      <div>
        Hasaranga Learning center
        <h1>{myVar}</h1>
      </div>
      <p>Ravindu Hasaranga</p>
      <div className="mainBlock_container">{MainBlock}</div>
      <br />
      <br />
      <button
        style={{
          fontSize: "12px",
          border: "1px solid red",
          padding: "7px 12px",
        }}
        onClick={clickHandle}
      >
        Click me
      </button>
    </div>
  );
}

export default App;
