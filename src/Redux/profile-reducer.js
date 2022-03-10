import { usersAPI } from '../api/api';
import { profileAPI } from '../api/api'
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
	posts: [
		{ id: 1, message: 'Hi', LikesCount: 5 },
		{ id: 2, message: 'Hy name', LikesCount: 2 },
		{ id: 3, message: 'Hello', LikesCount: 2 },
		{ id: 4, message: 'Body', LikesCount: 10 },
		{ id: 5, message: 'I', LikesCount: 0 }
	],
	profile: null,
	status: ''
};

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let body = action.text;
			return {
				...state,
				posts: [...state.posts, {
					id: 6,
					message: body,
					LikesCount: 0
				}]

			}

		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile
			}

		case SET_STATUS:
			return {
				...state,
				status: action.status
			}
		default:
			return state;
	}
}

export const addPostActionCreator = (text) => ({ type: ADD_POST, text })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile: profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => {
	return (dispatch) => {
		usersAPI.getProfile(userId).then(response => {
			/*
			axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
			*/
			dispatch(setUserProfile(response.data));
		});
	}
}

export const getStatus = (userId) => async (dispatch) => {
	const response = await profileAPI.getStatus(userId)
	dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status)
	if (response.data.resultCode === 0) {
		dispatch(setStatus(status));
	}
}

export default profileReducer;