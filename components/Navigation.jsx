import React from 'react';
import { Route, Link } from "react-router-dom";
import styled, { keyframes } from 'styled-components'
import { slideInDown } from 'react-animations';

const slideAnimation = keyframes`${slideInDown}`;

const NavbarStyled = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  width: 100%;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: #F9F8F6;
`;

const NavbarWrapper = styled.div`
  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  @media (max-width: 768px) {
    display: none;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    position: fixed; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 100%; /* Full height (cover the whole page) */
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7); /* Black background with opacity */
    z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
    cursor: pointer; /* Add a pointer on hover */
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

const Title = styled.h1`
  font-family: 'Pompiere', cursive;
  font-size: 36px;
  margin-top: 15px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    display: None;
  }
`;

const HiddenTitle = styled.h1`
  font-family: 'Pompiere', cursive;
  font-size: 36px;
  margin-bottom: 10px;
  padding-top: 10px;
  margin-left: 5px;
`;

const StyledLink = styled(Link)`
  color: black;
  &:hover {
    color: black;
    text-decoration: none;
  }
  font-size: 20px;
  font-family: 'Pompiere', cursive;
  @media (max-width: 768px) {
    color: white;
  }
`;

const HiddenWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  font-family: 'Pompiere', cursive;
  @media (min-width: 768px) {
    display: None;
  }
`

const MenuToggle = styled.button`
  display: flex;
  margin-left: auto;
  margin-right: 10px;
  border-radius: 4px;
  cursor: pointer;
  touch-action: manipulation;
`

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      navState: 'navClosed',
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    if (window.innerWidth > 768) {
      this.setState({
        navState: '',
        isOpen: false
      })
    }
  }


  toggle() {
    var currentState = this.state.isOpen
    var newState = !this.state.isOpen
    if (this.state.width < 768) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    if(newState == true && this.state.width < 768) {
      this.setState({
        navState: 'navOpen animated slideInDown'
      });
    }else if (this.state.width < 768){
      this.setState({
        navState: 'navOpen animated slideOutUp'
      });
    }
  }
  render() {
    return (
      <NavbarStyled>
        <Title> Matt and Juliette </Title>
        <HiddenWrapper>
          <HiddenTitle> Matt and Juliette </HiddenTitle>
          <MenuToggle onClick={this.toggle}> <i  className="fas fa-bars fa-2x"></i> </MenuToggle>
        </HiddenWrapper>
        <NavbarWrapper className={this.state.navState}>
          <StyledLink  onClick={this.toggle} to="/"> Home </StyledLink>
          <StyledLink  onClick={this.toggle} to="/main-event"> Main Event </StyledLink>
          <StyledLink  onClick={this.toggle} to="/travel-stay"> Travel and Stay </StyledLink>
          <StyledLink  onClick={this.toggle} to="/wedding-party"> Wedding Party </StyledLink>
          <StyledLink  onClick={this.toggle} to="/registry"> Registry </StyledLink>
          <StyledLink  onClick={this.toggle} to="/faqs"> FAQS </StyledLink>        
        </NavbarWrapper>
      </NavbarStyled>
    );
  }
}