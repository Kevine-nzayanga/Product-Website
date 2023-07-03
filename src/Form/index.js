// import React from "react";
// import './style.css';
// import React, { useState } from "react";

// import { useParams } from "react-router";

// const AddProduct = () =>{
//     const [product, setProduct]= useState("");

//     const handleChange = (event) => {
//         setProduct(event.target.value);
//       };


// }


// const Form = () =>{
//     return (
//         <div>
//             <form className="myForm">
//                 <h4>Product`s name</h4>
//                 <input placeholder="Product`s name"></input>
//                 {/* <br/> */}
//                 <h4>Description</h4>
//                 <textarea rows={4} cols={50} placeholder="Description of the product..."></textarea>
//                 {/* <br/> */}
//                 <h4>Price</h4>
//                 <input placeholder="price"></input>
//                 {/* <br/> */}
//                 <h4>Discount</h4>
//                 <input placeholder="DiscountPercentage"></input>
//                 <br/>
//                 <br/>

//                  <button className="add" type='submit'>Add Product</button>         
//             </form>
//         </div>
//     )
// }

// export default Form;



import React,{useState} from "react";
import './style.css';

const Form = ()=>{
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [product, setproduct]=useState('');
    const [price, setprice] = useState('');
    const [message, setMessage] = useState("");


    const handleSubmit = async(e) =>{
         e.preventDefault();
         setIsSubmitted(true);
          setMessage("Successfully added product!");
         const data ={
            product: product,
            price: price
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
                <input placeholder="Enter Product" type="text" 
                onChange = {(e)=> setproduct(e.target.value)}
                />
                <br/>
                <br/>
                <input placeholder=" Enter price" type="text"
                onChange={(p)=>setprice(p.target.value)}/>
                <br/>
                <br/>
                 <button  type="submit">Login</button>
            </form>
            {isSubmitted && <p>{message}</p>}
        </div>
    )
}

export default Form;