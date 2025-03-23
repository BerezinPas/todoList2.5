export const selectTodos = (state) => state.todos.todos;
export const selectUpdatingTodosIDs = (state) => state.todos.updatingTodosIDs;
export const selectIsLoading = (state) => state.todos.isLoading;

export const selectEditTodoID = (state) => state.editTodo.id;
export const selectEditInputValue = (state) => state.editTodo.inputValue;

export const selectShouldSort = (state) => state.options.shouldSort;
export const selectSearchValue = (state) => state.options.inputSearchValue;
export const selectInputAddValue = (state) => state.options.inputAddValue;
