function Main(props){
  return <div>This is main component
    <ul>
      <li>java</li>
      <li>javascript</li>
      <li>C</li>
      <li>C++</li>
    </ul>
    {props.children}
    
    
     </div>;
}
export default Main;