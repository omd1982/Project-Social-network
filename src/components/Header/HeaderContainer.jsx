import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUsersData, logout } from '../../Redux/auth-reducer';

class HeaderContainer extends React.Component {
	render() {
		return <Header {...this.props} />
	}
}
let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
	//logout: state.auth.logout
})

export default connect(mapStateToProps, { getAuthUsersData, logout })(HeaderContainer);