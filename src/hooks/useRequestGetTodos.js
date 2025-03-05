import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';

export const useRequestGetTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isloading, setIsloading] = useState(false);

	useEffect(() => {
		setIsloading(true);
		const todosDbRef = ref(db, 'todos');
		return onValue(todosDbRef, (snapshot) => {
			const loadeadTodos = snapshot.val();
			console.log(loadeadTodos);
			setTodos(
				Object.entries(loadeadTodos || {}).map(([id, { title, completed }]) => {
					return { id, title, completed };
				}),
			);
			setIsloading(false);
		});
	}, []);
	return { todos, setIsloading, isloading, setTodos };
};
