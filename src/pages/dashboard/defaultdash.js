import download from '../../images/dashimage/download.png'
import ben from '../../images/dashimage/ben agbee.jpg'
import charlse from '../../images/dashimage/charlsepot.jpg'
import cloth from '../../images/dashimage/cloth.jpg'
import kkb from '../../images/dashimage/kkb.jpg'
import lead from '../../images/dashimage/lead.jpg'
import Button from "../../components/button";
import Sidebar from '../../components/sidebar';
import BookIcon from '@material-ui/icons/Book';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory, Link } from "react-router-dom"
import '../../css/dash.css'
import Dashboardroutes from "../dashboard/dashboardroutes"



function Dashboard() {
    let history = useHistory()


    const submit = (e) => {
        e.preventDefault();
        history.push('/')
    }
    return (
        <div className="content">
            <div className="maincss">
                <h3>Welcome to the beautiful work of some famous artist in Ghana</h3>
            </div>
            <div className="bodydiv">
                <div className="hopediv">
                    <div className="hope">
                        <Sidebar icon={(<HomeIcon />)} label={'Dashboard'} />
                        <Link to="/dashboard/books">
                            <Sidebar icon={(<BookIcon />)} label={'Books'} />
                        </Link>
                        <Link to="/dashboard/userprofile">
                        <Sidebar icon={(<PeopleAltIcon />)} label={'User profile'} />
                        </Link>
                        <Sidebar icon={(<PeopleAltIcon />)} label={'User Work'} />
                        <Sidebar icon={(<LocationOnIcon />)} label={'Location'} />
                        <div >
                            <Button text="Signout" onclick={submit} classname="signout" style={{ marginLeft: "12px", marginRight: "12px", flex: "0.2", fontSize: "large", height: "50px", width: "100px", border: "none", borderRadius: "5px", boxShadow: "-1px 0px 10px 0px gray", marginTop: "50px", backgroundColor: "#F66C35" }} />
                        </div>
                    </div>
                    <Dashboardroutes />
                    {/* <div className="chamber1">
                        <div className="elane">
                            <img src={download} alt="picture" className="ela" />
                            <h5>El Anatsui's unstoppable</h5>
                        </div>
                        <div className="agbee">
                            <img src={ben} alt="picture" className="ela" />
                            <h5>Breath taking painting by Ben Agbee</h5>
                        </div>
                        <div className="lope">
                            <img src={charlse} alt="picture" className="ela"/>
                            <h5>The ceramic pot of Charles Hervie</h5>
                        </div>
                    </div> */}
                    {/* <div className="chamber2">
                        <div className="textile">
                            <img src={cloth} alt="picture"className="ela" />
                            <h5>The african prints from the textile industry</h5>
                        </div>
                        <div className="lovepot">
                            <img src={kkb} alt="picture" className="ela" />
                            <h5>The ceramic pot of K.K Broni </h5>
                        </div>
                        <div className="ahenema">
                            <img src={lead} alt="picture" className="ela" />
                            <h5>The Ahenema slipper </h5>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Dashboard;