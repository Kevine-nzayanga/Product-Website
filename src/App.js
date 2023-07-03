import './App.css';
import Products from './Products';
import Navbar from './NavBar';
import Form from './Form';
import ProductDetailsPage from './DisplayProduct';
import Login from './Login';
import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <div >
     <Navbar/> 
      <BrowserRouter>
      <Routes>
       <Route index element={<Products/>}/>
       <Route path='/home' element={<Products/>}/>
       <Route path='/information/:productId' element={<ProductDetailsPage/>}/>
       <Route path='/form' element={<Form/>}/>
       <Route path='/login' element={<Login/>}/>

        </Routes>
        </BrowserRouter> 
    </div>
  ); 
}

export default App;
