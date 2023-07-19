import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './style.css';
import '../DisplayProduct/index';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({
    id: "",
    title: "",
    price: "",
    discountPercentage: "",
    thumbnail: "",
  });
  useEffect(() => {
    (async () => {
      await getProducts();
    })();
  }, []);
  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProducts(result.products);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };
  const handleAddProduct = (e) => {
    e.preventDefault();
    const { id, title, price, discountPercentage, thumbnail } = newProduct;
    const product = {
      id,
      title,
      price,
      discountPercentage,
      thumbnail,
    };
    setProducts([product, ...products]);
    setShowForm(false);
    setNewProduct({
      id: "",
      title: "",
      price: "",
      discountPercentage: "",
      thumbnail: "",
    });
  };
  if (loading) {
    return <h1 className="loading">Loading ...</h1>;
  }
  return (
    <div>
      <div>
        {showForm ? (
          <form onSubmit={handleAddProduct} className="productadd">
            <input
              type="text"
              name="id"
              placeholder="ID"
              value={newProduct.id}
              onChange={handleInputChange}
            />
            <br/>
            <br/>
            <input
              type="text"
              name="title"
              placeholder="Name"
              value={newProduct.title}
              onChange={handleInputChange}
            />
            <br/>
            <br/>
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
             <br/>
            <br/>
            <input
           
              type="text"
              name="discountPercentage"
              placeholder="Discount"
              value={newProduct.discountPercentage}
              onChange={handleInputChange}
            />
            <br/>
            <br/>
            <input
              type="text"
              name="thumbnail"
              placeholder="Image"
              value={newProduct.thumbnail}
              onChange={handleInputChange}
            />
            <br/>
            <br/>
            <button type="submit" className="new">Add</button>
          </form>
        ) : (
          <button onClick={() => setShowForm(true)} className="add-product">
            Add Product
          </button>
        )}
        <div className="cards">
          {products.map((item) => (
            <div key={item.id} className="card">
              <img src={item.thumbnail} alt={item.title} className="image" />
              <h3>{item.title}</h3>
              <h4>Price: $ {item.price}</h4>
              <h4>Discount: {item.discountPercentage} %</h4>
              <Link to={`/information/${item.id}`} key={item.id} >
             <button className="product-link">See Details</button>
           </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;

