import styles from './formAddTodo.module.scss';
import { useStateManager } from '../../stateManager';
import { requestCreateTodo } from '../../api';

export const FormAddTodo = () => {
	const { createTodoFetch } = requestCreateTodo();

	const {
		state: { inputAddTodoValue },
		updateState,
		createTodo,
	} = useStateManager();

	const onSubmit = (val) =>
		createTodoFetch(val).then((todo) => createTodo(todo));

	return (
		<form
			className={styles.formAddTodo}
			action="#"
			onSubmit={(e) => {
				e.preventDefault();
				const val = e.target.title.value.trim();
				if (val) {
					updateState('inputAddTodoValue', '');
					onSubmit(val);
				}
			}}
		>
			<input
				type="text"
				className={styles.inputAdd}
				name="title"
				onChange={(e) => updateState('inputAddTodoValue', e.target.value)}
				value={inputAddTodoValue}
				placeholder="write a task.."
			/>
			<button type="submit" className={styles.addBtn}>
				Add
			</button>
		</form>
	);
};
