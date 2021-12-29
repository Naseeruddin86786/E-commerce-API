import {useState} from "react";
import { Link } from "react-router-dom";
import "./authentication.css";

function Authentication() {
  const [name, setname] = useState("");
  const [password, setPassword] = useState("");
  const onName = (event) => setname(event.target.value);
  const onPassword = (event) => setPassword(event.target.value);
  const [error, setError] = useState(false);
  
    const validateInputs = () => {
      if (
        name.length===0 || password.length===0 || !name.includes("@") 
      ) {
        setError(true);
        return true;
      } else {
        setError(false);
        return false;
      };
    }
    
  const submit = () => {
    if (!validateInputs()){

    }
  }

  // const disableButton = () => {
  //   if (name.length===0||password.length===0)
  //   {
  //     return true;
  //   } else {
  //     return false; disabled={disableButton()}
  //   }
  // }

    return (
      
    <div className="signin" >
        <h1>Signin</h1>
        <input onChange={onName} value={name} type="text" placeholder="Enter email address *" /><br/><br/>
        <input onChange={onPassword} value={password} type="password" placeholder="Enter password *" /> <br/><br/>
        <button onClick={submit} >Login</button> <br/>
        <button><Link to="/signup">signup</Link></button>
        
        {error ? <p>Please fill the Inputs! </p> : <p></p>}
    </div> 
  );
}

export default Authentication;