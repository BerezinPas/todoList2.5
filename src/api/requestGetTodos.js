import { URL } from '../constants';

export const requestGetTodos = () => {
	return fetch(URL).then((responce) => responce.json());
};
