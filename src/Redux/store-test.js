import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "Hi", LikesCount: 5 },
				{ id: 2, message: "Hy name", LikesCount: 2 },
				{ id: 3, message: "Hello", LikesCount: 2 },
				{ id: 4, message: "Body", LikesCount: 10 },
				{ id: 5, message: "I", LikesCount: 0 }
			],
			newPostText: "helloh hello hello"
		},
		dialogsPage: {
			messages: [
				{ id: 1, message: "Hi" },
				{ id: 2, message: "Hello how are you" },
				{ id: 3, message: "Good" },
				{ id: 4, message: "He he" },
				{ id: 5, message: "Yo" }
			],
			dialogs: [
				{ id: 1, name: "Dima" },
				{ id: 2, name: "Vika" },
				{ id: 3, name: "Ira" },
				{ id: 4, name: "Inga" },
				{ id: 5, name: "Marina" },
				{ id: 6, name: "Artyr" }
			],
			newMessageBody: ""
		},
		sidebar: {}
	},

	_callSubscriber() {
		alert("Kammon"); 
	},
	getState() {
		return this._state; 
	},

	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispacth(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._callSubscriber(this._state);
	}

}

export default store;
window.store = store;

