import { useState } from 'react';
import styles from './mainPage.module.scss';
import { ToDoListItem, Search, HeadlineTodoList } from '../../components';
import { sortHandler } from '../../utils';
import {
	useRequestDeleteTodo,
	useRequestGetTodos,
	useRequestSetTodo,
	useRequestCreateTodo,
} from '../../hooks';
import { FormAddTodo } from '../../components';
import { Link } from 'react-router-dom';

export const MainPage = () => {
	const { todos, isloading, setTodos } = useRequestGetTodos();
	const { deleteTodo } = useRequestDeleteTodo(setTodos);
	const { setTodo } = useRequestSetTodo(setTodos);
	const { createTodo } = useRequestCreateTodo(setTodos);

	const [searchValue, setSearchValue] = useState('');
	const [shouldSort, setShouldSort] = useState(false);

	const filtredTodos = todos.filter(({ title }) => title.includes(searchValue));

	let content;
	if (isloading) {
		content = <div className="loader"> </div>;
	} else if (todos.length === 0) {
		content = <p>TodoList is Empty</p>;
	} else if (filtredTodos.length === 0) {
		content = <p>Nothing found</p>;
	} else {
		content = filtredTodos
			.sort((a, b) => shouldSort && sortHandler(a.title, b.title))
			.map(({ completed, id, title }) => (
				<Link key={id} to={`todo/${id}`}>
					<ToDoListItem
						completed={completed}
						title={title}
						deleteTodo={() => deleteTodo(id)}
						setTodo={(title, completed) => setTodo(id, title, completed)}
					/>
				</Link>
			));
	}

	return (
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
	);
};
