// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import {NavLink } from 'react-router-dom';
import './header.css'
import Avatar from '@material-ui/core/Avatar'
// import LoginModal from './loginModal'
// import SignUpModal from './signupModal'


// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   flex: {
//     flexGrow: 1,
//   },
//   app:{
//     backgroundColor: '#555555'
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

// class Header extends React.Component {
//   state = {
//     auth: true,
//     anchorEl: null,
//   };

//   handleChange = (event, checked) => {
//     this.setState({ auth: checked });
//   };

//   handleMenu = event => {
//     this.setState({ anchorEl: event.currentTarget });
//   };

//   handleClose = () => {
//     this.setState({ anchorEl: null });
//   };

//   render() {
//     const { classes } = this.props;
//     const { auth, anchorEl } = this.state;
//     const open = Boolean(anchorEl);

//     return (
//       <div className={classes.root} id="header">
//         <AppBar className={classes.app} position="static" style={{height: '70px'}}>
//           <Toolbar>
//             <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//               <MenuIcon />
//             </IconButton>
//             <Typography variant="title" color="inherit" className={classes.flex}>
//               <b>NMDb</b>
//             </Typography>
//             {auth && (
//               <div className="headr">
//                 <div className="head-details">
//                   <span><NavLink to="/"> Home </NavLink></span>
//                   <span><NavLink to="/movies"> Trailers</NavLink> </span>
//                   <span><NavLink to="/clips"> Clips</NavLink></span>
//                   <span><NavLink to="/celebs"> Celebs </NavLink></span>
//                   <span><NavLink to="/news"> News </NavLink></span>
//                   <span><NavLink to="/about"> About </NavLink></span>
//                   <span><LoginModal /></span>
//                   &nbsp;<span><SignUpModal /></span>
//                 </div>
//                 <IconButton
//                   aria-owns={open ? 'menu-appbar' : null}
//                   aria-haspopup="true"
//                   onClick={this.handleMenu}
//                   color="inherit"
//                   style={{marginTop: '-12px'}}
//                 >
//                   <AccountCircle/>
//                 </IconButton>
//                 <span className="caret"> </span>
//                 <Menu
//                   id="menu-appbar"
//                   anchorEl={anchorEl}
//                   anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                   }}
//                   open={open}
//                   onClose={this.handleClose}
//                 >
//                   <MenuItem onClick={this.handleClose}>Profile</MenuItem>
//                   <MenuItem onClick={this.handleClose}>My account</MenuItem>
//                 </Menu>
//               </div>
//             )}
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }
// }

// Header.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(Header);


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

export default class Example extends React.Component {
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
    const links = ['Home', 'Movies', 'Celebs'];
    const dropdowns = ['SignUp', 'Login', 'View Profile', 'Reset'];
    // const { classes } = 
    return (
      <div className="head">
        <Navbar color="black" light expand="md">
          <NavbarBrand href="/"><font className='smoke'>Flixia</font></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
				{links.map(item => (
              <NavItem>
                <NavLink href="/components/"><font className='smoke'>{item}</font></NavLink>
              </NavItem>))}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <span className="avatar"> 
                  <img alt="" src="../images/avatar.jpg" style={{ margin: 10}} />
                  </span>
                </DropdownToggle>
                <DropdownMenu right>
                {dropdowns.map(item => (
                  <DropdownItem divider>
                    {item}
                  </DropdownItem>
                ))}
                  {/* <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
