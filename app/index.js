/**
* @Author: shenyu <shenyu>
* @Date:   2016/09/01 15:04:27
* @Email:  shenyu902@pingan.com.cn
* @Last modified by:   shenyu
* @Last modified time: 2016/09/05 17:31:37
*/


import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import DivBox from './components/divBox';

class Home extends Component {
    constructor(props) {
        super(props);

        /**
         * [state description]
         * getInitialState in ES5
         * @type {Object}
         */
        this.state = {
            message: props.name,
        };
        this._handleClick = this._handleClick.bind(this);
        this._deleteClikc = this._deleteClikc.bind(this);
    }
    componentWillMount() {
        console.log('componentWillMount');
        this.setState({
            name: 'Sam',
        });
        console.log(ReactDOM);
    }
    componentDidMount() {
        console.log('componentDidMount');
        console.log(this);
    }
    _handleClick(e) {
        console.log(e.target);
    }
    _deleteClikc() {
        console.log(1);
        ReactDOM.unmountComponentAtNode(document.getElementById('divBox'));
    }
    render() {
        console.log('render');
        return (
            <div id="test" className="test_class" ref="myDiv">
                <DivBox />
                test {this.state.name}
                <button onClick={this._deleteClikc} >删除</button>
            </div>
        );
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
};

/**
 * [defaultProps description]
 * getDefaultProps(){
 *    return {
 *        nameProp: '',
 *    }
 * }
 * @type {Object}
 */
Home.defaultProps = {
    name: 'Sam',
};


render(
    <Home name="test" />,
    document.getElementById('content')
);
