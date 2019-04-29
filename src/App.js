import React from 'react'
import { Route } from 'react-router'
import Layout from './Layout'
import Home from './containers/Home'
import BetweenWorlds from './containers/BetweenWorlds'
import './App.css'

export default () => (
    <Layout>
        <Route exact path="/" component={Home} />
        <Route exact path="/between-worlds" component={BetweenWorlds} />
    </Layout>
)
