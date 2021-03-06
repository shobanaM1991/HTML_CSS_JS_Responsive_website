import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import '../styles/App.css';
import HeaderSection from './header';
import About from '../components/header_components/About';
import Blog from '../components/header_components/Blog';
import ProductList from './header_components/ProductList';
import Contacts from './header_components/ContactUs';
import Footer from './footer'

function App() {
  return (
    <div className='App-footer'>
      <Router>
        <div className="App">
          <HeaderSection />
          <Switch>
            <Route path="/" exact component={ProductList} /> 
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            {/* <Route path="/products" component={ProductList} /> */}
            <Route path="/contactus" component={Contacts} />
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
