import { URL } from '../constants';

export const requestDeleteTodo = (id) => {
	const fetchURL = `${URL}/${id}`;
	return fetch(fetchURL, {
		method: 'DELETE',
	});
};
