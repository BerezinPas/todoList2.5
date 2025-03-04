import { useState } from 'react';
import styles from './formAddTodo.module.scss';

export const FormAddTodo = ({ onSubmit }) => {
	const [value, setValue] = useState('');

	return (
		<form
			className={styles.formAddTodo}
			action="#"
			onSubmit={(e) => {
				console.log(e);

				e.preventDefault();
				const val = e.target.title.value.trim();
				if (val) {
					setValue('');
					onSubmit(val);
				}
			}}
		>
			<input
				type="text"
				className={styles.inputAdd}
				name="title"
				onChange={(e) => setValue(e.target.value)}
				value={value}
				placeholder="write a task.."
			/>
			<button type="submit" className={styles.addBtn}>
				Add
			</button>
		</form>
	);
};
