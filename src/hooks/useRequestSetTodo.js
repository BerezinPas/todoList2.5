import { ref, set } from 'firebase/database';
import { db } from '../firebase';

export const useRequestSetTodo = () => {
	const setTodo = (id, title, completed) => {
		const todosDbRef = ref(db, `todos/${id}`);
		set(todosDbRef, {
			completed,
			title,
		});
	};
	return { setTodo };
};
