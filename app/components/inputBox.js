/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/08/31 11:23:29
* @Email:  shenyu902@pingan.com.cn
* @Last modified by:   SamMFFL
* @Last modified time: 2016/08/31 11:23:32
*/


import React, { Component } from 'react';


export default class InputBox extends Component {
    constructor(props) {
        super();
        this.state = {
            defaultValue: props.children,
        };
        this._handleChange = this._handleChange.bind(this);
    }

    // getDefaultProps() {
    //     return {
    //         inputName: 'label',
    //         inputProps: {
    //             type: 'text',
    //         },
    //     };
    // }

    // static defaultProps = {
    //     inputName: 'label',
    //     inputProps: {
    //         type: 'text',
    //     },
    // };
    _handleChange() {
        this.setState({
            defaultValue: this.refs.inputBox.value,
        });
    }

    render() {
        console.log(this.props);

        return (
            <div>
                <label htmlFor={this.props.targetName} >{this.props.inputName}</label>
                <input
                    {...this.props.inputProps}
                    value={this.state.defaultValue}
                    onChange={this._handleChange}
                    ref="inputBox"
                />
            </div>
        );
    }
}
