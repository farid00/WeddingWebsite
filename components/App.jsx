import React from 'react';
import styled from 'styled-components';
// using NavLink for the activeClassName, otherwise, for 
// a plain link, use Link.
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from './Navigation.jsx'
import Home from './Home.jsx'
import PostFormCntr from './forms/postFormCntr.jsx'
import { submitPost } from '../redux/actions/post.jsx'
import Registry from './Registry.jsx'
import WeddingParty from './WeddingParty.jsx'
import TravelStay from './TravelStay.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import MainEvent from './MainEvent.jsx'
import FAQ from './FAQ.jsx'
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
    	<Route path="/wedding-party" component={WeddingParty} />
      <Route path="/main-event" component={MainEvent} />
      <Route path="/travel-stay" component={TravelStay} />
      <Route path="/registry" component={Registry} />
      <Route path="/faqs" component={FAQ} />
  	</div>
</div>
)

export default App