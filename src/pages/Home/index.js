import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"
import Mine from "../Mine"
import { DatePicker, Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import './index.css'
// import './t2.scss'
import store from '../../store/index'



class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "真·首页"
        }
        this.changeInputValue = this.changeInputValue.bind(this);
        this.clickBtn = this.clickBtn.bind(this)
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态


        console.log(store.getState());

    }
    //action
    changeInputValue(e) {
        console.log(e.target.value);
        const action = {
            type: 'changeInput',
            value: e.target.value
        }
        store.dispatch(action)
    }


    storeChange() {
        this.setState(store.getState())
    }
    clickBtn() {
        const action = { type: 'addItem' }
        store.dispatch(action)
    }
    render() {
        return (
            <>
                <DatePicker />
                <a href='#/mine'>我的</a>
                <div className="inputArea">
                    <Input placeholder="Basic usage" onChange={this.changeInputValue} />
                    <Button type="primary" onClick={this.clickBtn}>提交</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        //关键代码-----------start
                        dataSource={this.state.list}
                        //关键代码-----------end
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                    />
                </div>


                <h1>现在位于首页</h1>
            </>
        )
    }
}


export default Home;
