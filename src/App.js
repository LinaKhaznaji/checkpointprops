import React from "react"; 
import { Photo, Title, Wrapper } from "./Component/Profile"; 
import { Welcome} from "./Component/Welcome"; 
import "./style.css"
function myfunction(value){ alert(value) } 
function App() 
{ return (
   <div> <Wrapper>
      <Photo id="img" src="téléchargement.jpg" />
    <Title style={{ color: "red" }} > Lina </Title>
     <Title style={{ color:"blue" }} > etudiante </Title>
      <Welcome alertMyInput={myfunction}/> </Wrapper> </div> ); 
      }; 
      export default App; 
