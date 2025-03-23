import { URL } from '../constants';

export const requestSetTodo = ({ id, title, completed }) => {
	const fetchURL = `${URL}/${id}`;
	return fetch(fetchURL, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json;charset=utf-8' },
		body: JSON.stringify({
			title,
			completed,
		}),
	}).then((responce) => responce.json());
};
