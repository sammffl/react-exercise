/**
* @Author: shenyu <shenyu>
* @Date:   2016/09/01 15:04:27
* @Email:  shenyu902@pingan.com.cn
* @Last modified by:   shenyu
* @Last modified time: 2016/09/05 21:24:25
*/


import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App'

/** store 数据结构 sample
{
  visibilityFilter: 'SHOW_ALL',
  todos: [
    {
      text: 'Consider using Redux',
      completed: true,
    },
    {
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}
*/
let store = createStore(todoApp);

render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('content')
);
