import React, { Component, Fragment } from 'react';

class ToDoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            list: [],
        }
    }


    render() {
        return (
            <Fragment>
                <input
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}

                />

                <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <li
                                    key={index} onClick={this.deleteItem.bind(this,index)}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    handleInputChange(e) {
        // console.log(e.target.value);
        this.setState({
            inputValue: e.target.value
        })
    }
    handleBtnClick(e) {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }
    deleteItem(index) {
        console.log(index);//输出点击的下标
        //immutable规范，不允许做state的任何改变，不然没法做性能优化
        const list = [...this.state.list];//所以先展开数组，赋值个一个常量
        list.splice(index,1);
        
        //react改变数据必须调用this.setState方法。
        this.setState({
            list:list
        })
    }
}

export default ToDoList;