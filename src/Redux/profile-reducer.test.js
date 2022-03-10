
import React from 'react';
import profileReducer, { addPostActionCreator } from './profile-reducer';
import App from '../App';

it('the value should increase', () => {
	let action = addPostActionCreator('new text');
	let state = {
		posts: [
			{ id: 1, message: 'Hi', LikesCount: 5 },
			{ id: 2, message: 'Hy name', LikesCount: 2 },
			{ id: 3, message: 'Hello', LikesCount: 2 },
			{ id: 4, message: 'Body', LikesCount: 10 },
			{ id: 5, message: 'I', LikesCount: 0 }
		]
	};
	let newState = profileReducer(state, action);
	expect(newState.posts.length).toBe(6);
	expect(newState.posts[5]).toBe('new text');

});