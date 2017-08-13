/* eslint-disable import/prefer-default-export */

// import ActionType from '../constants/todoConstants';

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    completed: false
});

export const setVisibilityFilter = ( filter ) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = ( id ) => ({
    type: 'TOGGLE_TODO',
    id
});
