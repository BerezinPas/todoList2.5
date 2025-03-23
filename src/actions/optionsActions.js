export const ACTION_OPTIONS_TYPE = {
	SET_SHOULD_SORT: 'SET_SHOULD_SORT',
	SET_SEARCH_VALUE: 'SET_SEARCH_VALUE',
	SET_INPUT_ADD_TODO_VALUE: 'SET_INPUT_ADD_TODO_VALUE',
};

export const setShouldSort = (shouldSort) => {
	return {
		type: ACTION_OPTIONS_TYPE.SET_SHOULD_SORT,
		payload: shouldSort,
	};
};

export const setSearchValue = (value) => {
	return {
		type: ACTION_OPTIONS_TYPE.SET_SEARCH_VALUE,
		payload: value,
	};
};
export const setInputAddValue = (value) => {
	return {
		type: ACTION_OPTIONS_TYPE.SET_INPUT_ADD_TODO_VALUE,
		payload: value,
	};
};
