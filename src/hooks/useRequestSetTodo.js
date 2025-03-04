// import { useState } from 'react';
import { URL } from '../constants';

export const useRequestSetTodo = (setTodos) => {
	// const [isUpdating, setIsUpdating] = useState(false);

	const setTodo = (id, title, completed) => {
		// setIsUpdating(true);
		const url = `${URL}/${id}`;
		fetch(url, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title,
				completed,
			}),
		})
			.then((responce) => responce.json())
			.then((updatedTodo) => {
				console.log('updatedTodo', updatedTodo);

				setTodos((prev) =>
					prev.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)),
				);
			});
		// .finally(() => setIsUpdating(false));
	};
	return { setTodo };
};
