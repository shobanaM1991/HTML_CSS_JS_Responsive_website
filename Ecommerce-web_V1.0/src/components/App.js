import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '../styles/App.css';
import HeaderSection from './header';
import About from '../components/header_components/About';
import Blog from '../components/header_components/Blog';
import ProductList from './header_components/ProductList';
import Contacts from './header_components/ContactUs';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderSection />
        <switch>
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/products" component={ProductList} />
        <Route path="/contactus" component={Contacts} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
