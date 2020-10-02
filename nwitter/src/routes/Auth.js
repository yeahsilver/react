import React, { useState } from "react";
import { authService, firebaseInstance } from "fBase";

const Auth = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    
    const onChange = (event)=>{
        const { target: {name, value}} = event;
        if(name == "email"){
            setEmail(value)
        } else if(name=="password"){
            setPassword(value);
        }
    };

    const toggleAccount = () => setNewAccount(prev => !prev);
    const onSocialClick = async (event) => {
        const {target:{name}} = event;
        let provider;
        if(name == "google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if(name == "github"){
            provider = new firebaseInstance.auth.GithubAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
    }

    const onSubmit = async (event) =>{
        // 기본설정을 설정하지 않음. 
        event.preventDefault();
        try {
            let data;
            if(newAccount){
                //create Account
               const data = await authService.createUserWithEmailAndPassword(
                   email, password
               )
            } else {
                // login
                const data = await authService.signInWithEmailAndPassword(
                    email, password
                );
            }
        } catch(error){
            setError(error.message);
        }
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input 
                    name="email"
                    type="email" 
                    placeholder="Email" 
                    required 
                    // value가 바뀌면 state도 변경
                    value={email}
                    onChange={onChange}
                />
                <input 
                    name="password"
                    type="password" 
                    placeholder="Password" 
                    required 
                    value={password} 
                    onChange={onChange}
                />
                <input type="submit" value={newAccount? "Create Account" : "Log In"}/>
                {error}
            </form>
            <span onClick={toggleAccount}>
                {newAccount? "Sign In" : "Create Account"}
            </span>
            <div>
                <button name="google" onClick={onSocialClick}>
                    Continue with Google
                </button>
                <button name="github" onClick={onSocialClick}>
                    Continue with Github
                </button>
            </div>
        </div>
    );
};

export default Auth