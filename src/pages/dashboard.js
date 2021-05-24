import '../css/dashboard.css'
import {Link} from 'react-router-dom'
import Button from "../components/button";
import Sidebar from '../components/sidebar';
import BookIcon from '@material-ui/icons/Book';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
function Dashboard() {

    return (
        <div className="maindiv">
            <div className="leftdiv">
     
                   
                    <Sidebar icon={(<HomeIcon />)} label ={ 'Dashboard' } />
                    <Sidebar icon={(<BookIcon />)} label ={ 'Books' } />
                    <Sidebar icon={(<PeopleAltIcon />)} label ={ 'User profile' } />
                    <Sidebar icon={(<PeopleAltIcon />)} label ={ 'User Work' } />
                    <Sidebar icon={(<LocationOnIcon />)} label ={ 'Location' } />
                    <div className="signout">
                    <Button text="Signout"  />
                    </div> 
            </div>
            <div className="rightdiv">

                <div className="divisions">
                    <div className="sub1">
                    <h3><Link to="/Sculpture" className="links">Sculpture</Link></h3>
                    </div>
                    <div className="sub2">
                    <h3><Link to="/Textiles" className="links">Textiles</Link></h3>
                    </div>
                    <div className="sub3">
                    <h3><Link to="/Leather" className="links">Leather</Link></h3>
                    </div>        
                </div>
                <div className="divisions2">
                        <div className="div2sub1">
                            <h3 ><Link to="/Pottery" className="links">Ceramics and Pottery</Link></h3>
                        </div>
                        <div className="div2sub2">
                            <h3><Link to="/Painting" className="links">Drawing and Painting</Link></h3>
                        </div>
                </div>
            </div>
        </div>
        
    )
}

export default Dashboard;