import { createContext, useContext, useState } from 'react';

const StateManagerContex = createContext({
	state: null,

	updateState: () => {},

	createTodo: () => {},
	readTodos: () => {},
	updateTodo: () => {},
	deleteTodo: () => {},
});

export const StateManager = ({ children, initialState }) => {
	const [state, setState] = useState(initialState);

	const updateState = (key, value) => {
		setState((prev) => ({ ...prev, [key]: value }));
	};

	const createTodo = (newTodo) => {
		setState((prev) => ({ ...prev, todos: [...state.todos, newTodo] }));
	};
	const readTodos = (todos) => {
		setState((prev) => ({ ...prev, todos }));
	};
	const updateTodo = (updatedTodo) => {
		setState((prev) => ({
			...prev,
			todos: prev.todos.map((todo) =>
				todo.id === updatedTodo.id ? updatedTodo : todo,
			),
			uddatingTodosIDs: prev.uddatingTodosIDs.filter(
				(id) => id !== updatedTodo.id,
			),
		}));
	};
	const deleteTodo = (id) => {
		setState((prev) => ({
			...prev,
			todos: prev.todos.filter((todo) => todo.id !== id),
			uddatingTodosIDs: prev.uddatingTodosIDs.filter(
				(updatingID) => id !== updatingID,
			),
		}));
	};
	return (
		<StateManagerContex
			value={{
				state,
				deleteTodo,
				createTodo,
				updateTodo,
				readTodos,
				updateState,
			}}
		>
			{children}
		</StateManagerContex>
	);
};

export const useStateManager = () => useContext(StateManagerContex);
