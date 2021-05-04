import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import '../../css/sculp.css';
import Definition from './definition';
import Types from './types';
import Elements from './elements';
import Examples from './examples';
import Materials from './materials';
import Importance from './importance';
import Uses from './uses';

function SculpRoutes (){


    return(
        <BrowserRouter>
        <div className="maincontainer">
            <div className="left">
                <h1>MARGICAL ART LIBRARY</h1>
                <div className="def">
                    <Link to="/Definition">
                    <h3>Definition</h3>
                    </Link>
                </div>
                    
                <div className="type">
                     <Link to="/Types"><h3>Types</h3></Link>
                </div>
                <div className="element">
                    <Link to="/Elements"><h3>Elements</h3></Link>    
                </div>
                <div className="example">
                   <Link to="/Examples"><h3>Examples</h3></Link>    
                </div>
                <div className="material">
                    <Link to ="/Materials"><h3>Materials</h3></Link>
                </div>
                <div className="important">
                    <Link to="/Importance"><h3>Importance</h3></Link>
                </div>
                <div className="uses">
                   <Link to ="/Uses"> <h3>Uses</h3></Link>
                </div>
               
            </div>
            <div className="right">
                <div className="righttop">
                    <h1>SCULPTURE</h1>
                </div>
                <div className="rightbottom">
                    <div className="grade">
                    
                        <Switch>
                            <Route exact path="/sculproutes" component = {Definition} />
                            <Route exact path="/Types" component = {Types} />
                            <Route exact path="/Elements" component = {Elements} />
                            <Route exact path="/Examples" component = {Examples} />
                            <Route exact path="/Materials" component = {Materials} />
                            <Route exact path="/Importance" component = {Importance} />
                            <Route exact path="/Uses" component = {Uses} />
                            
                        </Switch>
                    </div>
                    {/* <div className="order">
                        <div className="grade"></div>
                    </div> */}

                </div>

            </div>
        </div>

        </BrowserRouter>
    )
}
export default SculpRoutes;