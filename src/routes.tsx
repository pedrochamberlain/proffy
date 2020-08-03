import React from 'react'
import { BrowserRouter, Route} from 'react-router-dom'
import Landing from './pages/Landing'

function Routes () {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/study" />
            <Route path="/give-classes" />
        </ BrowserRouter>
    )
}

export default Routes