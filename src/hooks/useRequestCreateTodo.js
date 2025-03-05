import { ref, push } from 'firebase/database';
import { db } from '../firebase';

export const useRequestCreateTodo = () => {
	const createTodo = (title) => {
		const todosDbRef = ref(db, 'todos');
		push(todosDbRef, {
			title,
			completed: false,
		});
	};

	return { createTodo };
};
