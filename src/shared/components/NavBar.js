import React, { Component,Fragment } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,
	Route,
	Link,
	Switch,
	withRouter 
} from 'react-router-dom';
import { connect } from 'react-redux';
import { RoutesArray } from '../data/navBarData';
import '../styles/NavBar.css';

class NavBar extends Component{
	
	routes = () => RoutesArray.map((route,i) => <Route 
		exact path = {route.path}
		component = {route.component}
		key = {i}
		/>
	)
	
	navbar = () => {
		return <div id = 'navbar'>
			<div id = 'navbar-left'>
				<div><Link to = '/'> PodcastApp </Link> </div>
			</div>
			<div id = 'navbar-right'>
				<div><Link to = '/podcasts'> Podcasts </Link></div>
				<div><Link to = '/about'> About </Link></div>
				<div><Link to = '/contact'> Contact </Link></div>
			</div>
		</div>
	}	
	render(){
		return<Fragment>
			{this.navbar()}
			<Switch>
				{this.routes()}
			</Switch>
		</Fragment>
	}
}

/*
const mapStateToProps = (state) => {
	
}

const mapDispatchToProps = {
	
}

NavBar.propTypes = {	
	
}
*/

//export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Navbar));

export default NavBar;
