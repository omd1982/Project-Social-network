import * as axios from 'axios'; 

const instance = axios.create({
	withCredentials: true, // т.к. запрос с локального сервера
	baseURL: `https://social-network.samuraijs.com/api/1.0/`,
	headers: {'API-KEY':'fe8d349c-a6d3-4346-a123-ff1af9a73b3d'}
});
 
export const usersAPI = {
	getUsers(currentPage, pageSize){
	return instance.get(`users?page=${currentPage}&count=${pageSize}`)
	.then(response => {
				return response.data;
		});
},
	follow(userId){
		return instance.post(`follow/${userId}`)
	},
	unFollow(userId){
		return instance.delete(`follow/${userId}`) 
	},
	getProfile(userId){
		return profileAPI.getProfile(userId);
	}
}

export const profileAPI = { 
	getProfile(userId){
		return instance.get('profile/' + userId)
	},
	getStatus(userId){
		return instance.get('status/' + userId)
	},
	updateStatus(status){
		return instance.put('status/', { status: status}) // отправл. на сервер св-ва статус: то что требует документация (см. документацию) на видео в коде так 'profile/status' т.е. без / после status
	}
} 

export const authAPI = {
	me(){
		return instance.get(`auth/me`)
	},
	login(email, password, rememberMe = false){
		return instance.post(`auth/login`,{email, password, rememberMe})
	},
	logout(){
		return instance.delete(`auth/login`);
	}	
}
/*
export const securityAPI = {
getCaptchaUrl(){
		return instance.get(`security/get-captcha-url`);
	}
}
*/






