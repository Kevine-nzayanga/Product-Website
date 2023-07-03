import React,{useState} from "react";
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
                onChange={(p)=>setprice(p.target.value)}/>
                <br/>
                <br/>
                <input placeholder=" Enter brand" type="text"
                onChange={(p)=>setbrand(p.target.value)}/>
                <br/>
                <br/>
                <input placeholder=" Enter description" type="text"
                onChange={(p)=>setdescription(p.target.value)}/>
                <br/>
                <br/>
                 <button type="submit">Add</button>
            </form>
            {isSubmitted && <p>{message}</p>}
        </div>
    )
}

export default Form;