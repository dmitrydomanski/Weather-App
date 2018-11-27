import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../../containers/HomePage';

const layout = () => (
    <div>
        <Switch>
            <Route
                exact
                path="/"
                component={HomePage}
            />
        </Switch>
    </div>
);

export default withRouter(layout);
