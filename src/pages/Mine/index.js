import React, { Component } from 'react';

class Mine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "真·首页"
        }
    }
    render() {
        return (
            <>
                <a href='#/'>首页</a>
                <h1>现在位于我的</h1>

            </>
        )
    }
}


export default Mine;
