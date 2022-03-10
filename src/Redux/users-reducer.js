import {usersAPI} from '../api/api'; 
import {updateObjectInArray} from './object-helpers';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS';

let initialState = {
	users: [],
	pageSize: 20,
	totalItemsCount: 0, 
	currentPage: 1,
	isFetching: true, 
	followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
		switch (action.type){
		case FOLLOW:
		return {
			...state,
			users: updateObjectInArray (state.users, action.userId, {followed: true})	
		}
		case UNFOLLOW: 
		return {
			...state,
			users: updateObjectInArray (state.users, action.userId, {followed: false}),
		}
		case SET_USERS: {
			return {...state, users: action.users}
		}
		case SET_CURRENT_PAGE: {
			return {...state, currentPage: action.currentPage}
		}
		case SET_TOTAL_COUNT: {
			return {...state, totalUsersCount: action.count}
		}
		case TOGGLE_IS_FETCHING: {
			return {...state, isFetching: action.isFetching}
		}
		case FOLLOWING_IN_PROGRESS: {
			return {...state, 
			followingInProgress: action.isFetching ? [...state.followingInProgress, action.userId]
		: state.followingInProgress.filter(id=> id != action.userId)}
		}
		default: 
			return state;
	}
}

const followSuccess = (userId) => ({type: FOLLOW, userId})
const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
const setUsers = (users) => ({type: SET_USERS, users}) //потом возьмем с сервака
const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
const getTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, count: totalUsersCount})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage}) 
export const togglFollowingProgress = (isFetching, userId) => ({type: FOLLOWING_IN_PROGRESS, isFetching, userId})

export const getUsers = (currentPage, pageSize) => async(dispatch)=> {
			dispatch(toggleIsFetching(true)); // в момент запроса на сервер
			dispatch(setCurrentPage(currentPage)); 
				const data = await usersAPI.getUsers(currentPage, pageSize);
					dispatch(toggleIsFetching(false)); // когда приходит ответ
					dispatch(setUsers(data.items));
					dispatch(getTotalUsersCount(data.totalCount));
		}

const followUnfollowFlow = async(dispatch, userId, apiMethod, actionCreator) => { //выносим в общую функцию (искл. дубл кода)
	dispatch(togglFollowingProgress(true, userId));
				const response = await apiMethod(userId);
					if(response.data.resultCode == 0){
						dispatch(actionCreator(userId));
	}
	dispatch(togglFollowingProgress(false, userId));
}
export const follow = (userId) => {
	return async(dispatch)=> {
		followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)					
		}
	}
export const unfollow = (userId) => {
	return async(dispatch)=> {
		followUnfollowFlow(dispatch, userId, usersAPI.unFollow.bind(usersAPI), unfollowSuccess)
		}
	}
export default usersReducer;
