import React,{useState} from "react";
import {Link } from "react-router-dom";

import './style.css';

const Form = ()=>{
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [product, setproduct]=useState('');
    const [price, setprice] = useState('');
    const [brand, setbrand] = useState('');
    const [description, setdescription] = useState('');

    const [message, setMessage] = useState("");


    const handleSubmit = async(e) =>{
         e.preventDefault();
         setIsSubmitted(true);
          setMessage("Successfully added product!");
         const data ={
            product: product,
            price: price,
            brand:brand,
            description:description
         }
         console.log({data});
    
        
    try{
    const response = await fetch('https://dummyjson.com/products/add',{
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
                <h1>Add Product</h1>
                <input placeholder="Enter Product" type="text" 
                onChange = {(e)=> setproduct(e.target.value)}
                />
                <br/>
                <br/>
                <input placeholder=" Enter price" type="text"
                onChange={(e)=>setprice(e.target.value)}/>
                <br/>
                <br/>
                <input placeholder=" Enter brand" type="text"
                onChange={(e)=>setbrand(e.target.value)}/>
                <br/>
                <br/>
                <input placeholder=" Enter description" type="text"
                onChange={(e)=>setdescription(e.target.value)}/>
                <br/>
                <br/>
               <Link to={`/home`}>  <button className="addbutton" type="submit">Add</button></Link>
            </form>
            {isSubmitted && <p>{message}</p>}
        </div>
    )
}

export default Form;

