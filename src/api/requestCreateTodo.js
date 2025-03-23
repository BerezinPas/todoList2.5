import { URL } from '../constants';

export const requestCreateTodo = (title) => {
	return fetch(URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title,
			completed: false,
		}),
	}).then((responce) => responce.json());
};
