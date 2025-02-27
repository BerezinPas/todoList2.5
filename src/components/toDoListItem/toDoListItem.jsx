import { useState } from 'react';
import styles from './toDoListItem.module.scss';

export function ToDoListItem({ title, completed, ...props }) {
	const [checked, setChecked] = useState(completed);

	return (
		<li
			className={checked ? `${styles.item}  ${styles.completed}` : styles.item}
		>
			<Checkbox checked={checked} setChecked={setChecked} />
			{title}
		</li>
	);
}

function Checkbox({ checked, setChecked }) {
	return (
		<div className={styles.checkbox} onClick={() => setChecked(!checked)}>
			<input
				type="checkbox"
				value={true}
				checked={checked}
				onChange={() => setChecked(!checked)}
				className={styles.checkboxInput}
			/>
			<div className={styles.checkboxFake}>
				<svg
					width="12"
					height="9"
					viewBox="0 0 12 9"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className={styles.checkMark}
				>
					<path
						d="M0.999512 3.99951L3.80713 6.99951L11.0005 1.00049"
						stroke="white"
						strokeWidth="2"
					/>
				</svg>
			</div>
		</div>
	);
}
