import React, { Component } from 'react';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "真·首页"
        }
    }
    render() {
        return (
            <h1>HEllo World</h1>
        )
    }
}


export default Home;
