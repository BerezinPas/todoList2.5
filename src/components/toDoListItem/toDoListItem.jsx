import { useEffect, useRef, useState } from 'react';
import { STATE_TODO } from '../../constants';
import { FormEditTodo, ControlBtns, Checkbox } from '../../components';

import styles from './toDoListItem.module.scss';

export const ToDoListItem = ({
	title,
	completed,
	deleteTodo,
	setTodo,
	...props
}) => {
	const [value, setValue] = useState('');
	const [stateTodo, setStateTodo] = useState(STATE_TODO.IS_READY);

	const validateInput = (val) => {
		if (val && val !== title) {
			setTodo(val, completed);
			setStateTodo(STATE_TODO.IS_UPDATING);
		} else {
			setStateTodo(STATE_TODO.IS_READY);
		}
	};

	const onSubmitEditTodo = (e) => {
		e.preventDefault();
		console.log('val', value);
		validateInput(value.trim());
		setValue('');
	};

	useEffect(() => {
		setStateTodo(STATE_TODO.IS_READY);
	}, [title, completed]);

	const inputRedactRef = useRef(null);

	useEffect(() => {
		if (stateTodo === STATE_TODO.IS_REDACTING && inputRedactRef.current) {
			inputRedactRef.current.focus();
		}
	}, [stateTodo]);

	let content = '';

	switch (stateTodo) {
		case STATE_TODO.IS_READY:
			content = (
				<>
					<Checkbox
						className="checkmark"
						icon="✔"
						checked={completed}
						setChecked={() => {
							setStateTodo(STATE_TODO.IS_UPDATING);
							setTodo(title, !completed);
						}}
					/>
					<p className={styles.text}>{title}</p>
					<ControlBtns
						handleRedact={() => setStateTodo(STATE_TODO.IS_REDACTING)}
						handleDelete={() => {
							setStateTodo(STATE_TODO.IS_DELETING);
							deleteTodo();
						}}
					/>
				</>
			);
			break;

		case STATE_TODO.IS_REDACTING:
			content = (
				<FormEditTodo
					onSubmit={onSubmitEditTodo}
					inputRef={inputRedactRef}
					onChange={(e) => setValue(e.target.value)}
					onBlur={() => {
						validateInput(value.trim());
						setValue('');
					}}
				/>
			);
			break;

		case STATE_TODO.IS_DELETING:
		case STATE_TODO.IS_UPDATING:
		case STATE_TODO.IS_CREATING:
			content = 'loading...';
			break;

		default:
			break;
	}
	return (
		<li
			className={
				completed ? `${styles.item}  ${styles.completed}` : styles.item
			}
		>
			{content}
		</li>
	);
};
