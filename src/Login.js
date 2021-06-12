import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";


function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }
    return (
     <div className="login">
        <div className="login__logo">
            <img src="https://cdn0.iconfinder.com/data/icons/eon-social-media-contact-info-2/32/discord_group_forum_message-512.png" alt=""
            />
            <h1>iMessage</h1>
        </div>
          <Button onClick={signIn}>Sign In</Button>  
        </div>
    );
}

export default Login;
