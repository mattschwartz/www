import React from 'react'
import { Route } from 'react-router'
import { Switch } from 'react-router-dom'
import Layout from './Layout'
import Home from './containers/Home'
import BetweenWorlds from './containers/BetweenWorlds'
import './App.css'
import NotFound from './containers/NotFound';

export default () => (
    <Layout>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/between-worlds" component={BetweenWorlds} />
            <Route component={NotFound} />
        </Switch>
    </Layout>
)
