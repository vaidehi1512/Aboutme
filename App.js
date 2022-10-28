import React from 'react'
import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import Header from './Components/Header';
import Footer from './Components/Footer'
import PortfolioPage from './Pages/PortfolioPage'
import './App.css'

function App() {
    return (
        <Router>
        <Container className="p-0" fluid={true}>  
        <Header/>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/portfolio" component={PortfolioPage}/>
          <Route path="/contact" component={ContactPage}/>
          <Footer/>
        </Container>
      </Router>
    )
}

export default App
