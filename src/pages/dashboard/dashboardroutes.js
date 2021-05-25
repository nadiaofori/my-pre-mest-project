import React from 'react'
import Dashboard from '../../pages/dashboard/dashboard'
import Books from '../dashboard/Books'
import Userprofile from '../dashboard/Userprofile'
import { Switch, Route } from "react-router-dom"


const Dashboardroutes = () => {
    return (
        <div>
            
            <Switch>
            <Route exact path="/dashboard" component={Dashboard} /> 
            <Route exact path="/dashboard/books" component={Books} />
            <Route exact path="/dashboard/userprofile" component={Userprofile}/>

            </Switch>
        </div>
    )
}

export default Dashboardroutes;
