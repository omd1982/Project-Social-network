const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
	]
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.text;
			return {
				...state,
				messages: [...state.messages, { id: 7, message: body }]
			}
		default:
			return state;
	}
}
export const sendMessage = (text) => ({ type: SEND_MESSAGE, text })

export default dialogsReducer;