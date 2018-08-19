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


export default class Header extends React.Component {
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
    const links = [{
        name: 'Explore',
        link: '/explore'
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
    const dropdowns = ['SignUp', 'Login', 'View Profile', 'Reset'];
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
              <UncontrolledDropdown nav inNavbar direction="down">
                <DropdownToggle nav>
                  <Avatar />
                </DropdownToggle>
                <DropdownMenu right>
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
