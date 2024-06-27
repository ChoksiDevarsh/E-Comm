import React, { useEffect, useState } from 'react';
import NavBar from '../layout/NavBar/navBar';
import Footer from '../layout/Footer/footer';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://192.168.29.93:3080/api/product/fetch/${id}`)
            .then(function (response) {
                // handle success
                console.log(response, 'product - detail');
                setProduct(response.data.prod);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [id]);

    const handleAddToBag = (product) => {
        localStorage.setItem('product', JSON.stringify(product));
        navigate('/addToCart');
    };

    return (
        <>
            <NavBar />
            <section className="p-4">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className='grid grid-cols-2 gap-2'>
                        {product?.productImage?.map((image, index) => (
                            <div key={index} className='flex'>
                                <img className='h-full w-full object-cover' src={image} alt={`Product view ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div>
                        <div className='pl-10 text-xl font-bold'>{product.productName}</div>
                        <div className='pl-10'>{product.description}</div>
                        <div className='pl-10 pt-4 text-2xl font-bold'>{product.price}</div>
                        <div className='pl-10 pt-4'>
                            <h4 className='font-bold'>Size</h4>
                            <div className='flex gap-2 mt-2'>
                                {product?.size?.map((size, index) => (
                                    <label key={index} className='inline-flex items-center'>
                                        <input type='checkbox' className='mr-2' />
                                        {size}
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="pl-10 pt-4">
                            <button className="border border-black-300 drop-shadow-md hover:shadow-2xl bg-pink-600 px-4 py-2" onClick={() => handleAddToBag(product)}>ADD TO BAG</button>
                        </div>
                        <div className='pl-10 pt-4'>
                            <div dangerouslySetInnerHTML={{ __html: product?.productDetail }} />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default ProductDetails;
