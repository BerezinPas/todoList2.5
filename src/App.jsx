import { useState } from 'react';
import styles from './App.module.scss';
import { ToDoListItem, Search, HeadlineTodoList } from './components';
import { sortHandler } from './utils';
import {
	useRequestDeleteTodo,
	useRequestGetTodos,
	useRequestSetTodo,
	useRequestCreateTodo,
} from './hooks';
import { FormAddTodo } from './components';

function App() {
	const { todos, isloading, setTodos } = useRequestGetTodos();
	const { deleteTodo } = useRequestDeleteTodo(setTodos);
	const { setTodo } = useRequestSetTodo(setTodos);
	const { createTodo } = useRequestCreateTodo(setTodos);

	const [searchValue, setSearchValue] = useState('');
	const [shouldSort, setShouldSort] = useState(false);

	const filtredTodos = todos.filter(({ title }) =>
		title.toLowerCase().includes(searchValue.toLowerCase()),
	);

	let content;
	if (isloading) {
		content = <div className={styles.loader}> </div>;
	} else if (todos.length === 0) {
		content = <p>TodoList is Empty</p>;
	} else if (filtredTodos.length === 0) {
		content = <p>Nothing found</p>;
	} else {
		content = filtredTodos
			.sort((a, b) => shouldSort && sortHandler(a.title, b.title))
			.map(({ completed, id, title }) => (
				<ToDoListItem
					key={id}
					completed={completed}
					title={title}
					deleteTodo={() => deleteTodo(id)}
					setTodo={(title, completed) => setTodo(id, title, completed)}
				/>
			));
	}

	return (
		<div className={styles.container}>
			<div className={styles.todolist}>
				<Search
					placeholder="Search"
					value={searchValue}
					setValue={setSearchValue}
				/>
				<HeadlineTodoList
					checked={shouldSort}
					handlerSortBtn={() => setShouldSort((prev) => !prev)}
				/>
				<ul className={styles.todos}>{content}</ul>
				<FormAddTodo onSubmit={(val) => createTodo(val)} />
			</div>
		</div>
	);
}

export default App;
