export const ACTION_EDIT_TYPE = {
	SET_ID: 'SET_INPUT_EDIT_ID',
	SET_VALUE: 'SET_INPUT_EDIT_VALUE',
};

export const setEditTodoID = (id) => {
	return {
		type: ACTION_EDIT_TYPE.SET_ID,
		payload: id,
	};
};
export const setInputEditValue = (value) => {
	return {
		type: ACTION_EDIT_TYPE.SET_VALUE,
		payload: value,
	};
};
