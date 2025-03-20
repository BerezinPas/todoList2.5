import { useEffect, useRef } from 'react';
import { FormEditTodo, ControlBtns, Checkbox } from '../../components';

import styles from './toDoListItem.module.scss';
import { useStateManager } from '../../stateManager';
import { requestSetTodo } from '../../api';

export const ToDoListItem = ({ title, completed, id, ...props }) => {
	const { setTodo: setTodoFetch } = requestSetTodo();

	const { updateTodo, updateState, state } = useStateManager();
	const { inputEditTodoValue, uddatingTodosIDs, redactingTodoID } = state;

	const setTodo = (title, completed) => {
		updateState('uddatingTodosIDs', [...uddatingTodosIDs, id]);

		setTodoFetch(id, title, completed).then((updatedTodo) => {
			updateTodo(updatedTodo);
		});
	};

	const validateInput = (val) => {
		if (val && val !== title) {
			setTodo(val, completed);
		}
	};

	const onSubmitEditTodo = (e) => {
		e.preventDefault();
		validateInput(inputEditTodoValue.trim());
		updateState('inputEditTodoValue', '');
	};

	const inputRedactRef = useRef(null);

	useEffect(() => {
		if (id === redactingTodoID && inputRedactRef.current) {
			inputRedactRef.current.focus();
		}
	}, [redactingTodoID]);

	let content = '';

	if (uddatingTodosIDs.includes(id)) {
		content = 'loading...';
	} else if (redactingTodoID === id) {
		content = (
			<FormEditTodo
				onSubmit={onSubmitEditTodo}
				inputRef={inputRedactRef}
				onChange={(e) => updateState('inputEditTodoValue', e.target.value)}
				onBlur={() => {
					validateInput(inputEditTodoValue.trim());
					updateState('inputEditTodoValue', '');
					updateState('redactingTodoID', null);
				}}
			/>
		);
	} else {
		content = (
			<>
				<Checkbox
					className="checkmark"
					icon="✔"
					checked={completed}
					setChecked={() => {
						setTodo(title, !completed);
					}}
				/>
				<p className={styles.text}>{title}</p>
				<ControlBtns todoID={id} />
			</>
		);
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
