/**
* @Author: shenyu <SamMFFL>
* @Date:   2016/09/01 16:53:33
* @Email:  shenyu902@pingan.com.cn
* @Last modified by:   shenyu
* @Last modified time: 2016/09/05 17:40:18
*/


import React, { Component } from 'react';

class DivBox extends Component {
    render() {
        return (
            <div id="divBox">
                {this.props.name}
            </div>
        );
    }
}

DivBox.defaultProps = {
    name: 'defaultProps',
};

export default DivBox;
