import { ACTION_OPTIONS_TYPE } from '../actions/optionsActions';

const initialOptions = {
	shouldSort: false,
	inputSearchValue: '',
	inputAddValue: '',
};

export const optionsReducer = (state = initialOptions, { type, payload }) => {
	switch (type) {
		case ACTION_OPTIONS_TYPE.SET_SEARCH_VALUE:
			return {
				...state,
				inputSearchValue: payload,
			};

		case ACTION_OPTIONS_TYPE.SET_SHOULD_SORT:
			return {
				...state,
				shouldSort: payload,
			};

		case ACTION_OPTIONS_TYPE.SET_INPUT_ADD_TODO_VALUE:
			return {
				...state,
				inputAddValue: payload,
			};

		default:
			return state;
	}
};
