import { URL } from '../constants';

export const requestCreateTodo = () => {
	const createTodoFetch = (title) => {
		const url = URL;
		return fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title,
				completed: false,
			}),
		}).then((responce) => responce.json());
	};

	return { createTodoFetch };
};
