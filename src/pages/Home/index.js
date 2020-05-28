import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"
import Mine from "../Mine"
import { DatePicker, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css'
// import './t2.scss'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "真·首页"
        }
        this.changeInputValue = this.changeInputValue.bind(this);
    }
    changeInputValue(e) {
        console.log(e.target.value);
    }
    render() {

        return (
            <>
                <DatePicker />
                <a href='#/mine'>我的</a>
                <div className="inputArea">
                    <Input placeholder="Basic usage" onChange={this.changeInputValue} />
                    <Button type="primary">提交</Button>
                </div>
                <h1>现在位于首页</h1>
            </>
        )
    }
}


export default Home;
