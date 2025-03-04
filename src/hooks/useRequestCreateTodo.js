import { URL } from '../constants';

export const useRequestCreateTodo = (setTodos) => {
	// const [isCreating, setIsCreating] = useState(false);
	const createTodo = (title) => {
		// setIsCreating(true);
		const url = URL;
		fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title,
				completed: false,
			}),
		})
			.then((responce) => responce.json())
			.then((newTodo) => {
				console.log(newTodo, 'createTodo');
				setTodos((prev) => [...prev, newTodo]);
			});
		// .finally(() => setIsCreating(false));
	};

	return { createTodo };
};
