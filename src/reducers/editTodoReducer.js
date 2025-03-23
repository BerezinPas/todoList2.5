import { ACTION_EDIT_TYPE } from '../actions/editActions';

const initialEditTodo = {
	inputValue: '',
	id: null,
};

export const editTodoReducer = (state = initialEditTodo, { type, payload }) => {
	switch (type) {
		case ACTION_EDIT_TYPE.SET_VALUE:
			return {
				...state,
				inputValue: payload,
			};

		case ACTION_EDIT_TYPE.SET_ID:
			return {
				...state,
				id: payload,
			};

		default:
			return state;
	}
};
