import React, {useState} from 'react'
import Product from './productfun'


const ProductList = () => {
    const [initproduct, setproduct] = useState([
        {
            id:'001',
            name: 'Battery',
            source:'/images/battery.jpg',
            product_info:"High-performance e-bike battery 36 Volt 20.7Ah 745Wh down tube",
            price:'$20',
            colors:'Black',
            count:1
        },
        {
            id:'002',
            name: 'Bike-hanger',
            source:'/images/bike-carrier.jpg',
            product_info:"Bicycle racks and bicycle holding systems are suitable for e-bikes",
            price:'$200',
            colors:'Black',
            count:1
        },
        {
            id:'003',
            name: 'Bike-tyre',
            source:'/images/bike-tyre.jpg',
            product_info:"Optimised all-rounder with extra secure puncture protection",
            price:'$30',
            colors:'Black',
            count:1
        },
        {
            id:'004',
            name: 'Light',
            source:'/images/light.jpg',
            product_info:"Smart Vulcan Light Curved Outdoor IP65 LED Wall Light",
            price:'$20',
            colors:'Black',
            count:1
        },
        {
            id:'005',
            name: 'Rear-Light',
            source:'/images/rear-led.jpg',
            product_info:"Red Cycling Products Bright LED Light Beleuchtungs Set 2021",
            price:'$40',
            colors:'Black',
            count:1
        },
        {
            id:'006',
            name: 'Ebike',
            source:'/images/smart-ebike.jpg',
            product_info:"E-bike Giant XTC SLR Light XC hardtail with a top frame",
            price:'$700',
            colors:'Black',
            count:1
        }
        ]);
    return(
        <div className="products-page">
            {initproduct.map((product) => (
                <Product id={product.id} name={product.name} source={product.source}
                product_info={product.product_info} price={product.price} colors={product.colors} 
                count={product.count}/>
            ))}
        </div>
    );
};
export default ProductList
