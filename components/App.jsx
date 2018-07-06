import React from 'react';
import styled from 'styled-components';
// using NavLink for the activeClassName, otherwise, for 
// a plain link, use Link.
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { Jumbotron, Container } from 'reactstrap';
import Navigation from './Navigation.jsx'
import Home from './Home.jsx'
import PostFormCntr from './forms/postFormCntr.jsx'
import { submitPost } from '../redux/actions/post.jsx'
import WeddingDetails from './WeddingDetails.jsx'
import Registry from './Registry.jsx'
// Our Pure and clean App component. In the browser, we'll wrap
// this inside a BrowserRouter component and put it in the DOM,
// otherwise on server render, we'll stick this in a StaticRouter
// component and renderToString it.

const FlexContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`

const App = () => (
<div>
	<Navigation/>
  	<div>
    	<Route exact path="/" component={Home}/>
    	<Route path="/details" component={WeddingDetails} />
      <Route path="/registry" component={Registry} />
  	</div>
</div>
)

export default App