import { authAPI } from '../api/api';
const SET_USER_DATA = 'my-app/auth/SET_USER_DATA';
//const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	captchaUrl: null
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload
			}
		/*
		case GET_CAPTCHA_URL_SUCCESS:
		return {
			...state,
			...action.payload
		}
		*/
		default:
			return state;
	}
}
export const setAuthUsersData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { id, email, login, isAuth } })
export default authReducer;

//export const  getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})



export const getAuthUsersData = () => async (dispatch) => {
	const response = await authAPI.me();
	if (response.data.resultCode === 0) {
		let { id, email, login } = response.data.data;
		dispatch(setAuthUsersData(id, email, login, true));
	}
}


export const login = (email, password, rememberMe) => async (dispatch) => {
	const response = await authAPI.login(email, password, rememberMe);
	if (response.data.resultCode === 0) {
		dispatch(getAuthUsersData());
	}
	/*else if (response.data.resultCode === 10){
		dispatch(getCaptchaUrl());		
	}
	*/
}

export const logout = () => async (dispatch) => {
	const response = await authAPI.logout();
	if (response.data.resultCode === 0) {
		dispatch(getAuthUsersData(null, null, null, false))
	}
}

/*
export const getCaptchaUrl = () => async (dispatch) => {
	const response = await securityAPI .getCaptchaUrl();
	const captchaUrl = response.data.url;

	dispatch(getCaptchaUrlSuccess(captchaUrl));
}
*/