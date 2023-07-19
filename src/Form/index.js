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

// import React, { useState } from "react";
// import "./style.css";
// import Navbar from "../NavBar";

// const [showForm, setShowForm] = useState(false);
// const Form = () => {
//   const [newProduct, setNewProduct] = useState({
//     id: "",
//     title: "",
//     price: "",
//     discountPercentage: "",
//     thumbnail: "",
//   });



//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct((prevProduct) => ({
//       ...prevProduct,
//       [name]: value,
//     }));
//   };
//   const handleAddProduct = (e) => {
//     e.preventDefault();
//     const { id, title, price, discountPercentage, thumbnail } = newProduct;
//     const product = {
//       id,
//       title,
//       price,
//       discountPercentage,
//       thumbnail,
//     };
//     // setProducts([product, ...products]);
//     setShowForm(false);
//     setNewProduct({
//       id: "",
//       title: "",
//       price: "",
//       discountPercentage: "",
//       thumbnail: "",
//     });
//   };

//   return (
//     <div>
//       <Navbar />
//       <div>
//         {showForm ? (
//           <form onSubmit={handleAddProduct} className="newForm">
//             <input
//               type="text"
//               name="id"
//               placeholder="ID"
//               value={newProduct.id}
//               onChange={handleInputChange}
//             />
//             <br/>
//             <br/>
//             <input
//               type="text"
//               name="title"
//               placeholder="Title"
//               value={newProduct.title}
//               onChange={handleInputChange}
//             />
//             <br/>
//             <br/>
//             <input
//               type="text"
//               name="price"
//               placeholder="Price"
//               value={newProduct.price}
//               onChange={handleInputChange}
//             />
//              <br/>
//             <br/>
//             <input
//               type="text"
//               name="discountPercentage"
//               placeholder="Discount Percentage"
//               value={newProduct.discountPercentage}
//               onChange={handleInputChange}
//             />
//             <br/>
//             <br/>
//             <input
//               type="text"
//               name="thumbnail"
//               placeholder="Thumbnail URL"
//               value={newProduct.thumbnail}
//               onChange={handleInputChange}
//             />
//             <br/>
//             <br/>
//             <button type="submit" className="add-a-product">Add Product</button>
//           </form>
//         ) : (
//           <button onClick={() => setShowForm(true)} className="add-product">
//             Add new Product
//           </button>
//         )}
//         {/* <div className="cards">
//           {products.map((item) => (
//             <div key={item.id} className="card">
//               <img src={item.thumbnail} alt={item.title} />
//               <h3>{item.title}</h3>
//               <h4>Price: $ {item.price}</h4>
//               <h4>Discount: {item.discountPercentage} %</h4>
//               <a href="we">
//                 <button className="read-product">Read More</button>
//               </a>
//             </div>
//           ))}
//         </div> */}
//       </div>
//     </div>
//   );
// };
// export default Form;