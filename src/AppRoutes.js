import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App'
import Manage from './pages/Manage';
import Create from './pages/Create';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/create" component={Create} />
            <Route exact path="/manage" component={Manage} />
            <Route exact path="/" component={Manage} />
        </Switch>
    </App>
    
export default AppRoutes;