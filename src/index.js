import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ToDoList from './ToDoList';//todolist
import SentenceHome from './sentence/sentenceHome';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ToDoList />,document.getElementById('root'));
ReactDOM.render(<SentenceHome />,document.getElementById('root'));
