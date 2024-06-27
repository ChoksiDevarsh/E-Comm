import { Routes, Route } from 'react-router-dom'
import Home from '../page/home';
import Login from '../page/login';
import PageNotFound from '../page/PageNotFound';
import ProductDetails from '../page/ProductDeatils'
import ProductListing from '../page/Productlisting';
import Cart from '../page/Cart';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/productdetails/:id' element={<ProductDetails />} />
            <Route path='/products' element={<ProductListing />} />
            <Route path='/addtoCart' element={<Cart />} />
        </Routes>
    )
}

export default AppRoutes;