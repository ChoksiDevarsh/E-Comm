import React, { useState } from 'react';
import NavBar from '../layout/NavBar/navBar';
import Footer from '../layout/Footer/footer';
import vcj1 from '../images/vcj1.jpg';

const Cart = () => {
    const product_detail = {
        id: 1,
        productName: 'Versace Jeans Couture',
        description: 'Men Mandarin Collar Applique T-shirt',
        price: 41000,
        ShippingPrice: 500
    };

    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState("");

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleSizeChange = (event) => {
        setSize(event.target.value);
    };

    const totalPrice = product_detail.price * quantity;

    return (
        <>
            <NavBar />
            <div className='container mx-auto px-60'>
                <section className='flex p-4'>
                    <div className='w-1/2 p-4'>
                        <div className='border border-gray-300 p-4 flex'>
                            <img className='w-48 h-48 object-cover' src={vcj1} alt='Versace Jeans Couture' />
                            <div className='ml-4 flex flex-col justify-between'>
                                <div>
                                    <h2 className='font-bold'>{product_detail.productName}</h2>
                                    <p>{product_detail.description}</p>
                                    <p className='font-bold'>Rs {product_detail.price}</p>
                                </div>
                                <div className='flex'>
                                    <label htmlFor="size" className='block mb-2'>Select Size:</label>
                                    <select id="size" className='border border-gray-300 p-1' value={size} onChange={handleSizeChange}>
                                        <option value="">Select size</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                    </select>
                                    <label htmlFor="quantity" className='block mb-2'>Select Quantity:</label>
                                    <select id="quantity" className='border border-gray-300 p-1' value={quantity} onChange={handleQuantityChange}>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='w-1/2 p-4'>
                        <div className='border border-gray-300 p-4'>
                            <h2 className='font-bold'>Subtotal</h2>
                            <p>Price per item: Rs {product_detail.price}</p>
                            <p>Quantity: {quantity}</p>
                            <p>Shipping fees: Rs {product_detail.ShippingPrice}</p>
                            <p className='font-bold'>Total Price: Rs {totalPrice + product_detail.ShippingPrice}</p>
                            <div>
                                <button 
                                    type='submit' 
                                    className='w-full mt-4 bg-pink-600 text-white font-bold py-2 px-4 hover:bg-pink-700 transition duration-300'>
                                    Pay
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
