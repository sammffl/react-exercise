/**
* @Author: shenyu <shenyu>
* @Date:   2016/09/05 21:33:57
* @Email:  shenyu902@pingan.com.cn
* @Last modified by:   shenyu
* @Last modified time: 2016/09/05 21:37:09
*/


const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
