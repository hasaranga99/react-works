
import "./App.css";
import Main from "./Components/Main";

import { myData } from "./Data/myData";

function App() {
  const MainBlock = myData.map(({ id, name, city, Position,image }) => {
    return <Main key={id} name={name} city={city} Position={Position} image={image} />;
  });
  return (
    <div className="main_container">
      <div>
        Hasaranga Learning center
        <h1>Hasaranga</h1>
      </div>
      <p>Ravindu Hasaranga</p>
      <div className="mainBlock_container">{MainBlock}</div>
    </div>
  );
}

export default App;
