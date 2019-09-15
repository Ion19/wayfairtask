import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap' ;

    
    import logo from '../utlites/images/logo.png';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      
      <div className="top-navbar ">
        <Navbar color="light" light expand="lg">
         
              
              <NavbarBrand  href="/">
                <img src={logo} alt="Wayfair" width='180'/>
              </NavbarBrand>
                
                

            

              <NavbarToggler onClick={this.toggle} />

              <Collapse isOpen={this.state.isOpen} navbar>

                


                

                  <form className="form-inline flex-grow-1">          

                    <input className="form-control  form-control-lg mr-sm-2  flex-grow-1" type="search" 

                    placeholder="&#xF002; Find Anything" style={{fontFamily:'Arial, FontAwesome'}} aria-label="Search"/>

                    <button className="btn my-2 my-sm-0" type="button">
                        <i className="fa fa-camera fa-2x main-color " aria-hidden="true"></i>
                    </button>
                    </form>   
                   

              


                <Nav  navbar>
                

                    <NavItem className="nav-item">
                    <NavLink className="nav-link text-capitalize" href="/contactus/">
                        <i className="fa fa-phone mr-2 light-color" aria-hidden="true"></i>
                        contact us
                    </NavLink>
                    </NavItem>

                    <NavItem className="nav-item">
                    <NavLink className="nav-link text-capitalize"  href="/timeworks/">
                        <i className="fa fa-clock-o mr-2 light-color" aria-hidden="true"></i>
                        time works
                    </NavLink>
                    </NavItem>

                    <NavItem className="nav-item active">
                    <NavLink className="nav-link text-capitalize"  href="/mycart/">
                        
                        <i className="fa fa-shopping-cart rounded-circle mr-2 main-color" aria-hidden="true"></i>
                        my cart
                    
                    </NavLink>
                    </NavItem>

                    <NavItem className="nav-item text-uppercase">
                    <NavLink className="nav-link"  href="/egp/">EGP</NavLink>
                    </NavItem>

                
                </Nav>

                
              </Collapse>
              
              
        </Navbar>
        </div>
      
    );
  }
}