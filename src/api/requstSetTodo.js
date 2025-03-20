import { URL } from '../constants';

export const requestSetTodo = () => {
	const setTodo = (id, title, completed) => {
		const url = `${URL}/${id}`;
		return fetch(url, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title,
				completed,
			}),
		}).then((responce) => responce.json());
	};
	return { setTodo };
};
