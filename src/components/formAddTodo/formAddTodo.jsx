import styles from './formAddTodo.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputAddValue } from '../../selectors';
import { createTodo } from '../../actions/todosActions';
import { setInputAddValue } from '../../actions/optionsActions';

export const FormAddTodo = () => {
	const dispatch = useDispatch();
	const inputAddTodoValue = useSelector(selectInputAddValue);

	const onSubmit = (val) => dispatch(createTodo(val));

	return (
		<form
			className={styles.formAddTodo}
			action="#"
			onSubmit={(e) => {
				e.preventDefault();
				const val = e.target.title.value.trim();
				if (val) {
					dispatch(setInputAddValue(''));
					onSubmit(val);
				}
			}}
		>
			<input
				type="text"
				className={styles.inputAdd}
				name="title"
				onChange={(e) => dispatch(setInputAddValue(e.target.value))}
				value={inputAddTodoValue}
				placeholder="write a task.."
			/>
			<button type="submit" className={styles.addBtn}>
				Add
			</button>
		</form>
	);
};
