// const name  = "Ravindu Hasaranga1"
// const Position = "Web developer1"

// const myObj = {
//   name: `${name}`,
//   Position: `${Position}`,
//   city: "Medirigiriya",

// };

function Main({name,city,Position}){
    // const {city} = myObj;
  return (
    <div>
      This is Main Component
      <ul>
        <li>java</li>
        <li>{city}</li>
        <li>{name}</li>
        <li>{Position}</li>
      </ul>
    </div>

  );
}
export default Main;