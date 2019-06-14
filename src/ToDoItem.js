import React,{ Component } from 'react';

class ToDoItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
        //constructor是组件运行时第一个执行的方法，在这里改变this的绑定可以节约性能

    }

    render(){
        const {content} =  this.props ;
        return (
          <div onClick={this.handleClick}>{content}</div>  
        )
    }
    handleClick(){
        const {deleteIt,index} = this.props;
        deleteIt(index);
        //上面2行下面1行是优化后的代码
        // this.props.deleteIt(this.props.index)
        // alert(this.props.index)//获取点击的下标

    }
}
export default ToDoItem;