import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';
import styled from 'styled-components';
import nada404LogoWhite from '../assets/nada404LogoWhite.png'


const Styles = styled.div`
  .navbar {
    background-color: #82D7E3;
  }

  a, .navbar-brand, .navbar-nav .nav-link {
    color: #d3d3d3;

    &:hover {
      color: #FFFFFF;
    }

  .nav-item{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  }
`;

class NavigationBar extends Component{

    render(){
      return (
        <Styles>
          <Navbar className='bg-dark' expand="lg">
            <Navbar.Brand href="/">
              <img src={nada404LogoWhite} alt="HOME" width="128" height="58"></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Item style={{display:'flex',flexDirection:'column',justifyContent: 'center'}}>
                  <Nav.Link href="/">主页</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/customerlist">客户</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/todolist">备忘</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/misc">其他</Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Styles >
      );
    }
}

export default NavigationBar;