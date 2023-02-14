import './App.css';
import Main from './Components/Main';


import { myData } from './Data/myData';

const NewBlock = ()=>{
  return(
    <>
    {myData.map(({name,city,Position,id})=> {
    return <Main key={id} name={name} city={city} Position={Position}/>;
  })}
    </>
  )
}


function App() {
  // const MainBlock = myData.map(({name,city,Position,id})=> {
  //   return <Main key={id} name={name} city={city} Position={Position}/>;
  // }); 
  return (
  <div>
    Hasaranga Learning center
    <h1>Ravindu Hasaranga</h1>
    <NewBlock />
  </div>
  );
}

export default App;
