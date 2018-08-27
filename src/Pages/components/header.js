import './header.css'
import Avatar from './avatar'


import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import {NavLink as Link} from 'react-router-dom'
import LoginModal from '../components/loginModal'
import SignUpModal from '../components/signupModal'

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loginmodal: false,
      signupmodal: false
    };
  }
  
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  changeMe = (active) => {
    this.toggle();
    if(active == 'login'){
      this.setState({
        loginmodal: true,
        signupmodal: false
      })
    }else {
      this.setState({
        signupmodal: true,
        loginmodal: false
      })
    }
  }
  
  render() {
    // console.log(LoginModal.state.email);

    const links = [{
        name: 'Explore',
        link: '/'
      },
      {
        name: 'Movies',
        link: '/movies'
      },
      {
        name: 'Celebs',
        link: '/celebs'
      },
      {
        name: 'News',
        link: '/news'
      }];
    const dropdowns = ['View Profile'];
    // const { classes } = 
    return (
      <div className="head">
        <Navbar color="black" light expand="md" style={{padding: '0 1rem'}}>
          <NavbarBrand><Link to='/'><font className='smoke'>Flixia</font></Link></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
				{links.map(item => (
              <NavItem>
                <NavLink href={item.link}><font className='smoke'>{item.name}</font></NavLink>
              </NavItem>))}
                <LoginModal toggle={this.changeMe}/>
                <SignUpModal toggle={this.changeMe}/>
              <UncontrolledDropdown nav inNavbar direction="down">
                <DropdownToggle nav>
                  <Avatar />
                </DropdownToggle>
                <DropdownMenu right onClick={!this.state.isOpen}>
                {dropdowns.map(item => (
                  <DropdownItem >
                    {item}
                  </DropdownItem>
                ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
