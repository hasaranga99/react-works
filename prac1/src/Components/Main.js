
function Main({name,city,Position,image}){
 
  return (
    <div>
      <img src={
        image?`${image}`:`https://m.media-amazon.com/images/I/91gbfULvW0L._AC_SL1500_.jpg`
      }
      alt= "CardImag"
      />
      <div className="mainblock_details">
        <h3>{!name? `no name`: `${name}`}</h3>
        <p>
          <span>{city}</span>
          <span>{Position}</span>
        </p>
      </div>
    </div>

  );
}
export default Main;