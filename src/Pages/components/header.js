import './header.css'
import Avatar from './avatar'
import avatarURL from '../images/avatar.jpg'
import logo from '../images/flix1.png';
import logo1 from '../images/flix2.png';
// import logo2 from '../images/flixia1.png';
// import logo3 from '../images/flixia2.png';
import { NavLink } from 'react-router-dom';
// import Search from './searchbox';
import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink as NavLinB,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import LoginModal from '../components/loginModal'
import SignUpModal from '../components/signupModal'
import { bool } from 'prop-types';
// import Search from './searchbox';
// import SearchExample from './searchComponent';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
			loginmodal: false,
			signupmodal: false,
			isAuthenticated: false,
			// links: []
		};
	}

	componentDidMount = () => {
		const store = sessionStorage.getItem('user');
		(((store) !== null) && ((store) !== undefined) && (typeof (store) !== bool) ? this.setState({ isAuthenticated: true }) : null);
	}


	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	changeMe = () => {
		this.toggle();
	}

	Logout() {
		this.setState({
			isAuthenticated: false,
		});
		sessionStorage.clear();
	}

	render() {
		let links = [];
		if (this.state.isAuthenticated !== true) {
			links = [{
				name: 'Home',
				link: '/'
			}]
		} else {
			links = [{
				name: 'Home',
				link: '/',
			},
			{
				name: 'Movies',
				link: '/movies'
			},
			{
				name: 'Celebs',
				link: '/celebs'
			}]
		}
		const name = sessionStorage.getItem('name');
		return (
			<div className="head">
				<Navbar color="black" light expand="md" style={{ padding: '0 1rem' }}>
					<NavbarBrand><font className='smoke'><NavLink to='/'><img src={logo} alt='' className='headerlogo smoke' /><img src={logo1} alt='' className='headerlogo1' /></NavLink></font></NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="ml-auto" navbar>
							{
								links &&
								links.map((item, index) => (
									<NavItem key={index}>
										<NavLinB>
											<NavLink to={item.link} key={index}><font className='smoke' style={{ fontWeight: 'bolder' }}>{item.name}</font></NavLink>
										</NavLinB>
									</NavItem>))
							}

							{this.state.isAuthenticated ? null : <SignUpModal toggle={this.changeMe} />}
							{this.state.isAuthenticated ? null : <LoginModal toggle={this.changeMe} />}
							<UncontrolledDropdown nav inNavbar direction="down">
								<DropdownToggle nav>
									{this.state.isAuthenticated ? <Avatar avatar={avatarURL} /> : <Avatar avatar={avatarURL} />}
								</DropdownToggle>
								<DropdownMenu right onClick={this.toggle}>
									<DropdownItem >
										{this.state.isAuthenticated ?
											(<p> @{name} <br />
												<p onClick={this.Logout.bind(this)} style={{ width: '100%' }}>Logout</p></p>) :
											<p>You have to be Logged in to view this content</p>
										}
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
