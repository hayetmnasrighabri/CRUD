
import './App.css';
import Navbar from './components/Navbar';
import Sidebar  from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Products from './page/Products';
import AddProducts from './page/AddProducts';
import ProductsDetails from './page/ProductsDetails';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='row'>
        <div className='col-2 sidebar'>
          <Sidebar/>
        </div>
        <div className='col-10'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='products' element={<Products/>}/> 
            <Route path='products/add' element={<AddProducts/>}/>
            <Route path='products/:productId' element={<ProductsDetails/>}/>
          </Routes>
         </div>
    </div>
    </div>
  );
}

export default App; 
