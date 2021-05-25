import { Switch, Route } from "react-router-dom"

import Home from "../pages/home"
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import Dashboard from "../pages/dashboard/dashboard"
import Pottery from "../details/pottery/pottery"
import Sculpture from "../details/sculpture/sculpture"
import Textiles from "../details/textiles/textiles"
import Leather from "../details/leather/leather"
import Painting from "../details/painting/painting"
import Defaultdash from "../pages/dashboard/defaultdash"
import Books from "../pages/dashboard/Books"

const AppRoutes = () => {

    return(
        <Switch>
            <Route exact path ="/" component={Home} />
            <Route exact path ="/signin" component={Signin} />
            <Route exact path ="/signup" component={Signup} />
            <Route exact path ="/dashboard" component={Dashboard} />
            <Route exact path ="/pottery" component={Pottery} />
            <Route exact path ="/sculpture" component={Sculpture} />
            <Route exact path ="/textiles" component={Textiles}/>
            <Route exact path="/leather" component={Leather}/>
            <Route exact path="/painting" component={Painting}/>
            <Route exact path="/defaultdash" component={Defaultdash}/>
            <Route exact path="/dashboard/books" component={Defaultdash}/>
            <Route exact path="/books" component={Books}/>"
        </Switch>
    )
}

export default AppRoutes;