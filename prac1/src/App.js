import './App.css';
import Main from './Components/Main';


import { myData } from './Data/myData';

// const NewBlock = ()=>{       
//   return(
//     <Fragment>
//     {myData2?.map(({name,city,Position,id})=> {
//     return <Main key={id} name={name} city={city} Position={Position}/>;
//   })}
//     </Fragment>
//   )
// }


function App() {
  const MainBlock = myData.map(({name,city,Position,id})=> {
    return <Main key={id} name={name} city={city} Position={Position}/>;
  }); 
  return (
  <div>
    Hasaranga Learning center
    <h1>Ravindu Hasaranga</h1>
    {MainBlock}
  </div>
  );
}

export default App;
