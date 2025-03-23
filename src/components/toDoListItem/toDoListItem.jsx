import { useEffect, useRef } from 'react';
import { FormEditTodo, ControlBtns, Checkbox } from '../../components';
import styles from './toDoListItem.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectEditInputValue,
	selectEditTodoID,
	selectUpdatingTodosIDs,
} from '../../selectors';
import { addUpdatingId, updateTodo } from '../../actions/todosActions';
import { setEditTodoID, setInputEditValue } from '../../actions/editActions';

export const ToDoListItem = ({ title, completed, id, ...props }) => {
	const inputEditTodoValue = useSelector(selectEditInputValue);
	const updatingTodosIDs = useSelector(selectUpdatingTodosIDs);
	const redactingTodoID = useSelector(selectEditTodoID);

	const dispatch = useDispatch();

	const setTodo = (title, completed) => {
		dispatch(addUpdatingId(id));
		dispatch(updateTodo({ title, completed, id }));
	};

	const validateInput = (val) => {
		if (val && val !== title) {
			setTodo(val, completed);
		}
	};

	const onSubmitEditTodo = (e) => {
		e.preventDefault();
		validateInput(inputEditTodoValue.trim());
		dispatch(setInputEditValue(''));
	};

	const inputRedactRef = useRef(null);

	useEffect(() => {
		if (id === redactingTodoID && inputRedactRef.current) {
			inputRedactRef.current.focus();
		}
	}, [redactingTodoID, id]);

	let content = '';

	if (updatingTodosIDs.includes(id)) {
		content = 'loading...';
	} else if (redactingTodoID === id) {
		content = (
			<FormEditTodo
				onSubmit={onSubmitEditTodo}
				inputRef={inputRedactRef}
				onChange={(e) => dispatch(setInputEditValue(e.target.value))}
				onBlur={() => {
					validateInput(inputEditTodoValue.trim());
					dispatch(setInputEditValue(''));
					dispatch(setEditTodoID(null));
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
