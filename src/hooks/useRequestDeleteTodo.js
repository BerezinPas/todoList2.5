import { ref, remove } from 'firebase/database';
import { db } from '../firebase';
export const useRequestDeleteTodo = () => {
	const deleteTodo = (id) => {
		const todosDbRef = ref(db, `todos/${id}`);
		remove(todosDbRef);
	};
	return { deleteTodo };
};
