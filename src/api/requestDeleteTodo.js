import { URL } from '../constants';

export const requestDeleteTodo = () => {
	const deleteTodoFetch = (id) => {
		const url = `${URL}/${id}`;
		console.log('url', url);

		return fetch(url, {
			method: 'DELETE',
		});
	};
	return { deleteTodoFetch };
};
