import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UseEffectComp = () => {
    const [products, setProducts] = useState([{ id: 0, title: '', price: '', description: '', category: '', image: '', rating: { rate: 0, count: 0 } }]);
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(resp => setProducts(resp.data))
            .catch(err => console.log('error while fetching products from fake store api : ', err));
    }, []);

    return (
        <div className='container-fluid d-flex flex-wrap'>

            {products.map(product =>
                <div style={{ height: '280px', width: '150px' }} className='card mx-2 my-2 p-2 bg bg-dark text-white'>
                    <img style={{ height: '100px' }} src={product['image']} title={product.title} alt="image link is broken" className='card-img-top' />
                    <div className='card-body'>
                        <p className='card-text'>{product.category}</p>
                        <p>price : {product.price.toLocaleString('en-in', { style: 'currency', currency: 'INR' })}</p>
                    </div>
                </div>
            )}

        </div>
    )
}

export default UseEffectComp;