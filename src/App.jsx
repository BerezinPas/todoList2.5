import { useEffect } from 'react';
import styles from './App.module.scss';
import { ToDoListItem, Search, HeadlineTodoList } from './components';
import { sortHandler } from './utils';
import { FormAddTodo } from './components';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectIsLoading,
	selectSearchValue,
	selectShouldSort,
	selectTodos,
} from './selectors';
import { fetchTodos } from './actions/todosActions';

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchTodos);
	}, []);

	const todos = useSelector(selectTodos);
	const isLoading = useSelector(selectIsLoading);
	const shouldSort = useSelector(selectShouldSort);
	const inputSearchValue = useSelector(selectSearchValue);

	const filtredTodos = todos.filter(({ title }) =>
		title.includes(inputSearchValue),
	);

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
