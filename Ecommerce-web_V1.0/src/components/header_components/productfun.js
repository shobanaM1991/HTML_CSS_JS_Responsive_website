import React, {useState} from 'react'
import '../../styles/product.scss'


const Product = ({id, name, source, product_info, price, color, count}) => {
    const [currentcount, setCountIncrement]= useState(1);

    const handleClick1=()=>{
            setCountIncrement(currentcount+1);
      };
    // const [currentcountDC, setCountDecrement]= useState(0);
    const handleClick2=()=>{
        if (currentcount === 0) {
            setCountIncrement(currentcount); }
        else {
            setCountIncrement(currentcount-1);}
      };
    return(
        <div className="project-page">
            <div className="product-items">
                <div className="image">
                    <img src={source} alt="Images are displaying about E-bike spare parts"></img> 
                </div>
                <h3>{id}</h3>
                <h3>{name}</h3>
                <h4>{product_info}</h4>
                <h3>{price}</h3>
                <h3>{color}</h3>
                <div className="btntext">
                    <button className= "positive" onClick={handleClick1}>+</button>
                    <h3>{currentcount}</h3>
                    <button className= "negative" onClick={handleClick2}>-</button>
                </div>
            </div>
        </div>
    );
}
export default Product