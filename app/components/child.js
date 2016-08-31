/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/08/30 21:26:38
* @Email:  shenyu902@pingan.com.cn
* @Last modified by:   SamMFFL
* @Last modified time: 2016/08/30 21:26:41
*/


import React ,{ Component } from 'react';

export default class ChildComponent extends Component {
    constructor(props){
        super();
        console.log(props)
        this.state ={
            checked: props.checked
        }
        this._handleChange = this._handleChange.bind(this);
    }
    _handleChange(){
        this.setState({checked:this.refs.input_check.checked});
    }
    render(){
        // let checked = (this.state.checked? 'checked':'');
        // console.log(checked)
        let checkbox;

        return (
            <div>
                <label>child:{this.state.checked?'checked':'not checked'}</label>
                <input
                    type="checkbox"
                    checked={this.state.checked}
                    ref="input_check"
                    onChange={this._handleChange}
                />
            </div>
        );
    }
}
