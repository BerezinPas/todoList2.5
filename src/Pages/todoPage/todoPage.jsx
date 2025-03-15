import { Link, useNavigate, useParams } from 'react-router-dom';
import { STATE_TODO, LOADING_TIME } from '../../constants';
import { useEffect, useRef, useState } from 'react';
import { Checkbox, ControlBtns, FormEditTodo } from '../../components';
import {
	useRequestDeleteTodo,
	useRequestGetTodos,
	useRequestSetTodo,
} from '../../hooks';

import styles from './todoPage.module.scss';

export const TodoPage = () => {
	const { todos, setIsloading, isloading, setTodos } = useRequestGetTodos();
	const { deleteTodo } = useRequestDeleteTodo(setTodos);
	const { setTodo: setTodoInTodos } = useRequestSetTodo(setTodos);
	console.log('todos', todos);
	console.log('isloading', isloading);

	const params = useParams();
	const setTodo = (title, completed) =>
		setTodoInTodos(params.id, title, completed);

	const navigate = useNavigate();

	const { title, completed } =
		todos.find(({ id }) => String(id) === params.id) || {};

	const [value, setValue] = useState('');
	const [stateTodo, setStateTodo] = useState(STATE_TODO.IS_LOADING);

	useEffect(() => {
		if (!isloading && stateTodo === STATE_TODO.IS_LOADING) {
			setStateTodo(STATE_TODO.IS_READY);
		}
	}, [isloading]);

	const validateInput = (val) => {
		if (val && val !== title) {
			setStateTodo(STATE_TODO.IS_UPDATING);
			setTodo(val, completed).then(() => setStateTodo(STATE_TODO.IS_READY));
		} else {
			setStateTodo(STATE_TODO.IS_READY);
		}
	};

	const onSubmitEditTodo = (e) => {
		e.preventDefault();
		validateInput(value.trim());
		setValue('');
	};

	const inputRedactRef = useRef(null);

	useEffect(() => {
		if (stateTodo === STATE_TODO.IS_REDACTING && inputRedactRef.current) {
			inputRedactRef.current.focus();
		}
	}, [stateTodo]);

	useEffect(() => {
		if (title === undefined && stateTodo === STATE_TODO.IS_READY) {
			setStateTodo(STATE_TODO.IS_NOT_FOUND);
		}
	}, [todos, stateTodo]);

	useEffect(() => {
		let timeout = setTimeout(() => {
			if (isloading && STATE_TODO.IS_LOADING && title === undefined) {
				setStateTodo(STATE_TODO.IS_TIME_OUT);
			}
		}, LOADING_TIME);
		return () => {
			clearInterval(timeout);
		};
	}, [isloading]);

	let content = '';
	const loader = <div className="loader"> </div>;

	switch (stateTodo) {
		case STATE_TODO.IS_READY:
			content = (
				<>
					<p className={styles.todo}>{title}</p>
					<div className={styles.controlPanel}>
						<Checkbox
							text="completed"
							className="checkmark"
							icon="✔"
							checked={completed}
							setChecked={() => {
								setStateTodo(STATE_TODO.IS_UPDATING);
								setTodo(title, !completed).then(() =>
									setStateTodo(STATE_TODO.IS_READY),
								);
							}}
						/>
						<ControlBtns
							textDeleteBtn="Delete Task"
							textRedactBtn="Edit Task"
							handleRedact={() => setStateTodo(STATE_TODO.IS_REDACTING)}
							handleDelete={() => {
								setStateTodo(STATE_TODO.IS_DELETING);
								deleteTodo(params.id).then(() => {
									navigate('/');
								});
							}}
						/>
						<button className={styles.backBtn} onClick={() => navigate(-1)}>
							back
						</button>
					</div>
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
		case STATE_TODO.IS_LOADING:
			content = loader;
			break;
		case STATE_TODO.IS_NOT_FOUND:
			content = (
				<p>
					Task is not found.
					<Link className="link" to="/">
						Go home
					</Link>
				</p>
			);
			break;
		case STATE_TODO.IS_TIME_OUT:
			content = (
				<p>
					time is out
					<Link className="link" to="/">
						Go home
					</Link>
				</p>
			);
			break;

		default:
			break;
	}
	return <>{content}</>;
};
