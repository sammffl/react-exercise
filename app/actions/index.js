/**
* @Author: shenyu <shenyu>
* @Date:   2016/09/05 21:25:24
* @Email:  shenyu902@pingan.com.cn
* @Last modified by:   shenyu
* @Last modified time: 2016/09/05 21:27:52
*/


let nextTodoId = 0;

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text,
    };
};

export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter,
    };
};

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id,
    };
};
