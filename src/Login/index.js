import React,{useState} from "react";
import './style.css';
import { Link } from "react-router-dom";

const Login = ()=>{
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [username, setUsername]=useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");


    const handleSubmit = async(e) =>{
         e.preventDefault();
         setIsSubmitted(true);
         setMessage("Successfully logged in!");
         const data ={
            username: username,
            password: password
         }
         console.log({data});
    
        
    try{
    const response = await fetch('https://dummyjson.com/auth/login',{
        method:'POST',
        headers:{
        'Content-Type':'application/json',
    },
    body : JSON.stringify(data)
    })

    const result = await response.json();
    console.log(result);

    }

    catch (error){
        console.log(error.message);
    }
    }
    
    return (
           <div>
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <input placeholder="Enter username" type="text" 
                onChange = {(e)=> setUsername(e.target.value)}
                />
                <br/>
                <br/>
                <input placeholder=" Enter password" type="password"
                onChange={(p)=>setPassword(p.target.value)}/>
                <br/>
                <br/>
               <Link to={`/home`}> <button  type="submit">Login</button></Link> 
            </form>
            {isSubmitted && <p>{message}</p>}
        </div>
    )
}

export default Login;