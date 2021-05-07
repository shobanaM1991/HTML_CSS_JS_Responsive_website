import React, {useState} from 'react'
import MenuIcon from '@material-ui/icons/Menu';
//import ReactDOM from 'react-dom'
import {Link} from 'react-router-dom'
import '../styles/head.scss'


const HeaderSection = () => {
    const [showLinks, setShowLinks] = useState(false); 
    return( 
        <nav className ="navbar">
            <div className = "logo">Electric Wheels</div>
            <div className ="navbarlinks" id={showLinks ? "hidden" : ""}>
                <ul>
                    <Link to="/about" style={{ textDecoration: 'none' }}><li>About Us</li></Link>
                    <Link to="/blog" style={{ textDecoration: 'none' }}><li>Blog</li></Link>
                    <Link to="/products" style={{ textDecoration: 'none' }}><li>ProductList</li></Link>
                    <Link to="/contactus" style={{ textDecoration: 'none' }}><li>ContactUs</li></Link>
                </ul>
            </div>
            <div className ="rightside">
                <ul>
                    <li>Trial Our Product</li>
                </ul>
            </div>
            <button onClick={()=>setShowLinks(!showLinks)}><MenuIcon /></button>
        </nav>
    )
}

export default HeaderSection;