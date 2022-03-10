import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator} from '../../../Redux/profile-reducer';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return{
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText  
	}
}

let mapDispachToProps = (dispatch) => {
	return{
		addPost: (text) => {
			dispatch(addPostActionCreator(text))
		}
	}
}

export default connect(mapStateToProps, mapDispachToProps)(MyPosts);