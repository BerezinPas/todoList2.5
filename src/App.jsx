import { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { ToDoListItem } from './components';

const URL = 'https://jsonplaceholder.typicode.com/todos';

function App() {
	const [todos, setTodos] = useState([]);
	const [isloading, setIsloading] = useState(false);

	useEffect(() => {
		setIsloading(true);
		fetch(URL)
			.then((responce) => responce.json())
			.then((loadedData) => {
				console.log(loadedData);

				setTodos(loadedData);
			})
			.catch((error) => console.log(error))
			.finally(() => setIsloading(false));
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.todolist}>
				<h2 className={styles.title}>todo list</h2>
				<ul>
					{isloading ? (
						<div className={styles.loader}> </div>
					) : (
						todos.map(({ completed, id, title }) => (
							<ToDoListItem key={id} completed={completed} title={title} />
						))
					)}
					{/* <ToDoListItem />
					<ToDoListItem />
					<ToDoListItem /> */}
				</ul>
			</div>
		</div>
	);
}

export default App;
