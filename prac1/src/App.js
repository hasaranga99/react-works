import './App.css';
import Main from './Components/Main';

const myData = [
  {
    name : 'Ravindu',
    city : 'medirigiriya',
    Position : 'web development',
  },
  {
    name : 'hasaranga',
    city : 'colombo',
    Position : 'Software engineer',
  },
  {
    name : 'kavishka',
    city : 'Polonnaruwa',
    Position : 'React',
  },
  {
    name : 'dilshan',
    city : 'maharagama',
    Position : 'node js',
  },
]

function App() {
  return (
  <div>
    Hasaranga Learning center
    <h1>Ravindu Hasaranga</h1>
    {myData.map(({name,city,Position})=> {
      return <Main name={name} city={city} Position={Position}/>;
    })}
  </div>
  );
}

export default App;
