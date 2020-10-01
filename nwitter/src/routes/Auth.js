import React, { useState } from "react";
import { authService } from "fBase";

const Auth = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    
    const onChange = (event)=>{
        const { target: {name, value}} = event;
        if(name == "email"){
            setEmail(value)
        } else if(name=="password"){
            setPassword(value);
        }
    };

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
            console.log(error);
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
            </form>
            <div>
                <button>
                    Continue with Google
                </button>
                <button>
                    Continue with Github
                </button>
            </div>
        </div>
    );
};

export default Auth