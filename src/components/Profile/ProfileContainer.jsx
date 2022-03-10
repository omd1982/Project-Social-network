import React from 'react';
import Profile from './Profile'; 
import {connect} from 'react-redux';
import {getUserProfile } from '../../Redux/profile-reducer';
import {withRouter} from 'react-router-dom'; 
import {compose} from 'redux';
import {getStatus} from '../../Redux/profile-reducer';
import {updateStatus} from '../../Redux/profile-reducer';

class ProfileContainer extends React.Component {
		componentDidMount(){
		let userId = this.props.match.params.userId; 
		this.props.getUserProfile(userId);
		this.props.getStatus(userId);
}
	render(){ 
		return (
			<Profile {...this.props} profile = {this.props.profile}
			status = {this.props.status} updateStatus = {this.props.updateStatus}/>
		)
	}
}

let mapStateToProps = (state) => ({
	
	profile: state.profilePage.profile, 
	status: state.profilePage.status,
	authorizedUserId: state.auth.userId,
	isAuth: state.auth.isAuth

});

export default compose(
connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
withRouter)(ProfileContainer);
