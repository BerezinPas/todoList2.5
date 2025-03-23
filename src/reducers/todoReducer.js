import { ACTION_TODOS_TYPE } from '../actions/todosActions';

const initialTodos = {
	todos: [],
	updatingTodosIDs: [],
	isLoading: true,
};

export const todoReducer = (state = initialTodos, { type, payload }) => {
	switch (type) {
		case ACTION_TODOS_TYPE.CREATE_TODO:
			return {
				...state,
				todos: [...state.todos, payload],
			};

		case ACTION_TODOS_TYPE.FETCH_TODOS:
			return {
				...state,
				todos: payload,
				isLoading: false,
			};

		case ACTION_TODOS_TYPE.UPDATE_TODO:
			return {
				todos: state.todos.map((todo) =>
					todo.id === payload.id ? payload : todo,
				),
				updatingTodosIDs: state.updatingTodosIDs.filter(
					(id) => id !== payload.id,
				),
			};

		case ACTION_TODOS_TYPE.DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== payload),
				updatingTodosIDs: state.updatingTodosIDs.filter(
					(updatingID) => payload !== updatingID,
				),
			};

		case ACTION_TODOS_TYPE.ADD_UPDATING_ID:
			return {
				...state,
				updatingTodosIDs: [...state.updatingTodosIDs, payload],
			};

		default:
			return state;
	}
};
