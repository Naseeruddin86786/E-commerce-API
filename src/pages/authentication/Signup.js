import React from "react";
import Authentication from "./Authentication";
import "./signup.css";

function Signup () {
return(
    <div className="signup">
        <input placeholder="Enter First Name *" type="text" /> <br/>
        <input placeholder="Enter Last Name *" type="text" /> <br/>
        <input placeholder="Select your mail ID *" type="mail" /> <br/>
        <input placeholder="Set Password *" type="password" /> <br/>
        <button>Signup</button>
    </div>
)
}

export default Signup;