import React, { Component } from 'react';
import { Route, Link } from "react-router-dom"
import Mine from "../Mine"

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "真·首页"
        }
    }
    render() {
        return (
            <>
                <a href='#/mine'>我的</a>
                <h1>现在位于首页</h1>

            </>
        )
    }
}


export default Home;
