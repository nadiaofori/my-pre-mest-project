import { Switch, Route } from "react-router-dom"

import Home from "../pages/home"
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import Dashboard from "../pages/dashboard"
import Pottery from "../details/pottery/pottery"
import SculpRoutes from "../details/sculpture/sculproutes"
import Textiles from "../details/textiles/textiles"
import Leather from "../details/leather/leather"


const AppRoutes = () => {

    return(
        <Switch>
            <Route exact path ="/" component={Home} />
            <Route exact path ="/signin" component={Signin} />
            <Route exact path ="/signup" component={Signup} />
            <Route exact path ="/dashboard" component={Dashboard} />
            <Route exact path ="/pottery" component={Pottery} />
            <Route exact path ="/sculpRoutes" component={SculpRoutes} />
            <Route exact path ="/textiles" component={Textiles}/>
            <Route exact path="/leather" component={Leather}/>

        </Switch>
    )
}

export default AppRoutes;