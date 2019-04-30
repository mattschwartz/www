import React from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'
import Layout from './Layout'
import Home from './containers/Home'
import BetweenWorlds from './containers/BetweenWorlds'
import './App.css'
import NotFound from './containers/NotFound';
import After from './containers/After';
import ROgre from './containers/ROgre';

export default () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/between-worlds" component={BetweenWorlds} />
            <Route exact path="/after" component={After} />
            <Route exact path="/rogre" component={ROgre} />
            <Route component={NotFound} />
        </Switch>
    </Layout>
)
