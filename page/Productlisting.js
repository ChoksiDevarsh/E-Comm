import React, { useState, useEffect } from 'react';
import NavBar from '../layout/NavBar/navBar';
import Footer from '../layout/Footer/footer';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const ProductListing = () => {
    const [params] = useSearchParams();
    const [hovered, setHovered] = useState(null);
    const paramValue = params.get('type');
    const navigate = useNavigate();
    const [ProductList, setProductList] = useState([]);

    const handleMouseEnter = (index) => setHovered(index);
    const handleMouseLeave = () => setHovered(null);
    const handleNavigate = (routeName) => navigate(routeName);

    useEffect(() => {
        axios.get(`http://192.168.29.93:3080/api/product/fetch`)
            .then(function (response) {
                // handle success
                console.log(response, 'product - detail');
                setProductList(response.data.prod);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    return (
        <>
            <NavBar />
            <section className="p-4">
                <div>
                    <div>Home / Clothing / {paramValue ? paramValue : 'Loading....'}</div>
                    <h3>{paramValue ? paramValue : 'Loading....'} 3000 items</h3>
                </div>
                <div className='flex gap-10'>
                    <div className='h-full w-1/5'>
                        <div className='flex flex-col'>
                            <div className='mb-4 pt-2'><b>FILTER</b></div>
                            <div className='border rounded-md p-4 mb-4 shadow-sm'>
                                <b className='block mb-2'>Category</b>
                                <div className='mb-2'><input type='radio' name='filter' /> Men</div>
                                <div className='mb-2'><input type='radio' name='filter' /> Women</div>
                                <div className='mb-2'><input type='radio' name='filter' /> Kids</div>
                            </div>
                            <div className='border rounded-md p-4 mb-4 shadow-sm'>
                                <b className='block mb-2'>Price</b>
                                <div className='mb-2'><input type='checkbox' name='filter' /> Rs. 384 to Rs. 1288</div>
                                <div className='mb-2'><input type='checkbox' name='filter' /> Rs. 1288 to Rs. 2192</div>
                                <div className='mb-2'><input type='checkbox' name='filter' /> Rs. 2192 to Rs. 3096</div>
                            </div>
                            <div className='border rounded-md p-4 mb-4 shadow-sm'>
                                <b className='block mb-2'>Color</b>
                                <div className='mb-2'><input type='checkbox' name='filter' /> White</div>
                                <div className='mb-2'><input type='checkbox' name='filter' /> Blue</div>
                                <div className='mb-2'><input type='checkbox' name='filter' /> Black</div>
                            </div>
                            <div className='border rounded-md p-4 mb-4 shadow-sm'>
                                <b className='block mb-2'>Discount Range</b>
                                <div className='mb-2'><input type='radio' name='filter' /> 20% and above</div>
                                <div className='mb-2'><input type='radio' name='filter' /> 30% and above</div>
                                <div className='mb-2'><input type='radio' name='filter' /> 40% and above</div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full w-4/5'>
                        <div className='grid grid-cols-4 gap-4'>
                            {ProductList.map((product, index) => (
                                <div key={index} className='relative'>
                                    <div
                                        onMouseEnter={() => handleMouseEnter(index)}
                                        onMouseLeave={handleMouseLeave}
                                        className='relative'
                                    >
                                        <img src={product.productImage[0]} alt={`product ${index + 1}`} className="w-full" onClick={() => handleNavigate(`/productdetails/${product._id}`)} />
                                        {hovered === index && (
                                            <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 bg-opacity-75'>
                                                <img src={product.productImage[1]} alt={`product ${index + 1} view 2`} className='w-1/3' onClick={() => handleNavigate(`/productdetails/${product._id}`)} />
                                                <img src={product.productImage[2]} alt={`product ${index + 1} view 3`} className='w-1/3' onClick={() => handleNavigate(`/productdetails/${product._id}`)} />
                                            </div>
                                        )}
                                    </div>
                                    <button className='border border-gray-300 shadow-md hover:shadow-2xl mt-2'>
                                        WishList
                                    </button>
                                    <h5>Size: {product.size[0]}</h5>
                                    <b>Rs: {product.price}</b>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProductListing;
