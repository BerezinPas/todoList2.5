import {
	requestCreateTodo,
	requestDeleteTodo,
	requestGetTodos,
	requestSetTodo,
} from '../api';

export const ACTION_TODOS_TYPE = {
	CREATE_TODO: 'createTodo',
	UPDATE_TODO: 'updateTodo',
	DELETE_TODO: 'deleteTodo',
	FETCH_TODOS: 'FETCH_TODOS',
	ADD_UPDATING_ID: 'ADD_UPDATING_ID',
};

export const createTodo = (title) => (dispatch) => {
	requestCreateTodo(title).then((newTodo) => {
		dispatch({
			type: ACTION_TODOS_TYPE.CREATE_TODO,
			payload: newTodo,
		});
	});
};

export const updateTodo = (updatedTodo) => (dispatch) => {
	requestSetTodo(updatedTodo).then(() => {
		dispatch({
			type: ACTION_TODOS_TYPE.UPDATE_TODO,
			payload: updatedTodo,
		});
	});
};

export const deleteTodo = (id) => (dispatch) => {
	requestDeleteTodo(id).then(() => {
		dispatch({
			type: ACTION_TODOS_TYPE.DELETE_TODO,
			payload: id,
		});
	});
};

export const fetchTodos = (dispatch) => {
	requestGetTodos().then((todos) => {
		dispatch({
			type: ACTION_TODOS_TYPE.FETCH_TODOS,
			payload: todos,
		});
	});
};

export const addUpdatingId = (id) => {
	return {
		type: ACTION_TODOS_TYPE.ADD_UPDATING_ID,
		payload: id,
	};
};
