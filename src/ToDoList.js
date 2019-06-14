import React, { Component ,Fragment } from 'react';

class ToDoList extends Component {

    constructor(props){
        super(props);
        this.state ={
            inputValue:'',
            list:[],
        }
    }





    render() {
        return (
            <Fragment>
                <input
                 value={this.state.inputValue} 
                 onChange={this.handleInputChange.bind(this)}   
                
                />
                
                
                 <button>提交</button>
               <ul>
                   <li>学英语</li>
                   <li>ENGLISH</li>
               </ul>
            </Fragment>
        )
    }

    handleInputChange(e){
        // console.log(e.target.value);
        this.setState({
            inputValue : e.target.value
        })
    }
}

export default ToDoList;