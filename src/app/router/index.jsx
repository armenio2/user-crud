import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserView from '../pages/userView';
import FormView from '../pages/formView';

const userView = () => {
    return <UserView />;
}

const formView = () => {
    return <FormView />;
}

const noMatch = () => {
    return <p>segura onda parça</p>;
}

const routerView = () => {
    return (
        <Router>
            <Route exact path="/" component={userView} />
            <Route path="/form" component={formView} />
            <Route component={noMatch} />
        </Router>
    );
}

export default routerView;