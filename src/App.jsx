import { useEffect } from 'react';
import styles from './App.module.scss';
import { ToDoListItem, Search, HeadlineTodoList } from './components';
import { sortHandler } from './utils';
import { requestGetTodos } from './api';
import { FormAddTodo } from './components';
import { useStateManager } from './stateManager';

function App() {
	const { updateState, state } = useStateManager();
	const { isLoading, todos, inputSearchValue, shouldSort } = state;

	const filtredTodos = todos.filter(({ title }) =>
		title.includes(inputSearchValue),
	);

	useEffect(() => {
		requestGetTodos()
			.then((todos) => {
				updateState('todos', todos);
			})
			.then(() => updateState('isLoading', false));
	}, []);

	let content;
	if (isLoading) {
		content = <div className={styles.loader}> </div>;
	} else if (todos.length === 0) {
		content = <p>TodoList is Empty</p>;
	} else if (filtredTodos.length === 0) {
		content = <p>Nothing found</p>;
	} else {
		content = filtredTodos
			.sort((a, b) => shouldSort && sortHandler(a.title, b.title))
			.map(({ completed, id, title }) => (
				<ToDoListItem key={id} completed={completed} title={title} id={id} />
			));
	}

	return (
		<div className={styles.container}>
			<div className={styles.todolist}>
				<Search placeholder="Search" />
				<HeadlineTodoList />
				<ul className={styles.todos}>{content}</ul>
				<FormAddTodo />
			</div>
		</div>
	);
}

export default App;
