import React from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import Loading from './components/loading'

export default class componentD extends React.Component {
    render() {
        return (
            <div>
                <h1>d</h1>
                <Switch>
                    <Route path="/d/d-a" component={loadable(() => import('./../views/d-a'), { fallback: <Loading /> })}></Route>
                    <Route path="/d/d-a" component={loadable(() => import('./../views/d-a'), { fallback: <Loading /> })}></Route>
                    <Route path="/d/d-a" component={loadable(() => import('./../views/d-a'), { fallback: <Loading /> })}></Route>
                    <Route path="/d/d-a" component={loadable(() => import('./../views/d-a'), { fallback: <Loading /> })}></Route>
                    <Route path="/d/d-a" component={loadable(() => import('./../views/d-a'), { fallback: <Loading /> })}></Route>
                </Switch>
            </div>
        )
    }
}