import styles from './formEditTodo.module.scss';

export const FormEditTodo = ({
	inputRef,
	onSubmit,
	value,
	onChange,
	onBlur,
}) => {
	return (
		<form onSubmit={onSubmit} className={styles.editWrapper}>
			<input
				ref={inputRef}
				className={styles.inputEdit}
				name="title"
				type="text"
				value={value}
				onChange={onChange}
				onBlur={onBlur}
			/>
			<button type="submit" className={styles.changeBtn}>
				ok
			</button>
		</form>
	);
};
