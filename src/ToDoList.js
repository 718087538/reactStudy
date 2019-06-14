import React, { Component, Fragment } from 'react';
import './style.css'
import ToDoItem from './ToDoItem'

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
                {/* 注释：花括号代表js的表达式，注释也要这样写在里面，单行则用// */}
                <label htmlFor="insertArea">输入内容</label>
                {/* htmlFor就是for,因为与jsx的for循环冲突，所以替换了，类似的class也要替换成className */}
                <input
                    id="insertArea"
                    className="input"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange.bind(this)}
                />

                <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return (
                                <div>
                                    <ToDoItem 
                                    content={item} 
                                    index={index}
                                    //把父组件的删除方法传给子组件
                                    deleteIt={this.deleteItem.bind(this)}
                                    //把this页强制绑定为父组件的this,不然会找不到this
                                    />

                                    {/* <li
                                    key={index}
                                    onClick={this.deleteItem.bind(this, index)}
                                    dangerouslySetInnerHTML={{__html:item}}
                                    // 上面这种写法可以输出html，但是存在XSS安全漏洞
                                    >
                                        
                                    {item}
                                </li> */}

                                </div>
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
        list.splice(index, 1);

        //react改变数据必须调用this.setState方法。
        this.setState({
            list: list
        })
    }
}

export default ToDoList;