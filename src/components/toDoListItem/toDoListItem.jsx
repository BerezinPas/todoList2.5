import { Checkbox } from '../checkbox/checkbox';
import styles from './toDoListItem.module.scss';

export const ToDoListItem = ({ title, completed, ...props }) => {
	return (
		<li
			className={
				completed ? `${styles.item}  ${styles.completed}` : styles.item
			}
		>
			<Checkbox
				className="checkmark"
				icon="✔"
				checked={completed}
				setChecked={() => {}}
			/>
			<p className={styles.text}>{title}</p>
		</li>
	);
};
