// import { useState } from 'react';
import { URL } from '../constants';

export const useRequestDeleteTodo = (setTodos) => {
	// const [isDeleting, setIsDeleting] = useState(false);

	const deleteTodo = (id) => {
		// setIsDeleting(true);
		const url = `${URL}/${id}`;
		console.log('url', url);

		fetch(url, {
			method: 'DELETE',
		}).then((responce) => {
			console.log('responce delete', responce);
			setTodos((prev) => prev.filter((todo) => todo.id !== id));
		});
		// .finally(() => setIsDeleting(false));
	};
	return { deleteTodo };
};
