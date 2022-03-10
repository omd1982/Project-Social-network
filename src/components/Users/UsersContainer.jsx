import React from 'react';
import {
	follow,
	unfollow,
	togglFollowingProgress,
	getUsers
} from '../../Redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';
import Preloader from './../Preloader';
import { withAuthRedirect } from '../../hoc/withAuthReducer';
import { compose } from 'redux';

import {
	getUsersSelector,
	getPageSize,
	getTotalUsersCount,
	getCurrentPage,
	getIsFetching,
	getIfollowingInProgress
} from '../../Redux/user-select';

class UsersComponent extends React.Component {
	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}
	onPageChenged = (pageNumber) => {
		this.props.getUsers(pageNumber, this.props.pageSize)

	}
	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			<Users
				totalItemsCount={this.props.totalItemsCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChenged={this.onPageChenged}
				users={this.props.users}
				follow={this.props.follow}
				unfollow={this.props.unfollow}
				followingInProgress={this.props.followingInProgress}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		users: getUsersSelector(state),
		pageSize: getPageSize(state),
		totalItemsCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		followingInProgress: getIfollowingInProgress(state)
	}
}
/*
let mapStateToProps = (state) => {
	return { 
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInProgress: state.usersPage.followingInProgress
	}
}
*/
export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {
		follow, unfollow, 
		togglFollowingProgress, 
		getUsers
	})
)(UsersComponent)
