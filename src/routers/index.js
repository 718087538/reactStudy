import React from 'react';
import { HashRouter, Route, Switch, } from 'react-router-dom';
import Home from '../pages/Home';
import Mine from '../pages/Mine';

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mine" component={Mine} />
        </Switch>
    </HashRouter>
);


export default BasicRoute;