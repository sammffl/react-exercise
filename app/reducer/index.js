/**
* @Author: shenyu <shenyu>
* @Date:   2016/09/05 21:28:38
* @Email:  shenyu902@pingan.com.cn
* @Last modified by:   shenyu
* @Last modified time: 2016/09/05 21:29:19
*/


import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
});

export default todoApp;
