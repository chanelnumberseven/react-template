import React from 'react'
import { Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'
import Loading from '@/components/loading'

export default class componentD extends React.Component {
    render() {
        return (
            <div>
                <h1>c</h1>
                <Switch>
                    <Route path="/e/e-c/e-c-a" component={loadable(() => import('./a'), { fallback: <Loading /> })}></Route>
                    <Route path="/e/e-c/e-c-b" component={loadable(() => import('./b'), { fallback: <Loading /> })}></Route>
                </Switch>
            </div>
        )
    }
}