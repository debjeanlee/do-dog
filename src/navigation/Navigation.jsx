import { Navbar, Nav, Form, Image } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Home from './Home'
import Basics from './Basics'
import Beers from '../beers/Beers'
import logo from '../images/brewdog-logo.png'
import ID from '../beers/ID'
import RandomBeer from './RandomBeer'
import axios from '../beers/axios'
import Search from './Search'
import Results from './Results'



function Navigation({ allBeer, random, setRandom }) {

    const [ singleBeer, setSingleBeer ] = useState({});


    function getNewBeer(){
        let newIndex = Math.floor(Math.random() * 326);
        // console.log(newIndex);
        setRandom(allBeer[newIndex]);
    }

    // console.log("all beer", allBeer);
    // console.log("random", random);

    return (
        <Router>
            <Navbar className="d-flex" bg="light" expand="lg" >
                    <Image src={logo} alt="logo" className="logo mr-2" />
                <NavLink className="navbar-brand" to="/">
                    DO-DOG
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/basics">Brewer Basics</NavLink>
                    <NavLink className="nav-link" to={`/beers/all`}>Browse Recipes</NavLink>
                    <NavLink className="nav-link" to={`/random`} onClick={getNewBeer}>Random Beer</NavLink>
                </Nav>
                <Form inline>
                    <Search />
                </Form>
                </Navbar.Collapse>
            </Navbar>    

            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/basics" exact>
                    <Basics />
                </Route>
                <Route path="/beers/all" exact>
                    <Beers 
                        allBeer={allBeer} 
                        setSingleBeer={setSingleBeer}
                    />
                </Route>
                <Route path="/id/:id">
                    <ID beer={singleBeer}/>
                </Route>
                <Route to="/random" exact>
                    <RandomBeer 
                        beer={random} 
                        getNewBeer={getNewBeer}
                    />
                </Route>
            </Switch>
            </Router>
    )
}

export default Navigation
