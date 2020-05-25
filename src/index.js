import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//引入路由依赖，并起一个别名，因为原先的名字太长了
import { BrowserRouter as Router } from 'react-router-dom'



// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<ToDoList />,document.getElementById('root'));
// ReactDOM.render(<SentenceHome />,document.getElementById('root'));
ReactDOM.render(<Router><App /></Router>, document.getElementById('root'))
