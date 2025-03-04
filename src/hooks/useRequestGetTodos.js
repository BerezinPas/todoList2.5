import { useEffect, useState } from 'react';
import { URL } from '../constants';

export const useRequestGetTodos = () => {
	const [todos, setTodos] = useState([]);
	const [isloading, setIsloading] = useState(false);

	useEffect(() => {
		setIsloading(true);
		fetch(URL)
			.then((responce) => responce.json())
			.then((loadedData) => {
				console.log('useRequestGetTodos', loadedData);

				setTodos(loadedData);
			})
			.catch((error) => console.log(error))
			.finally(() => setIsloading(false));
	}, []);
	return { todos, setIsloading, isloading, setTodos };
};
