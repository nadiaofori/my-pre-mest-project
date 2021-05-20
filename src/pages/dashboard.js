import '../css/dashboard.css'
import {Link} from 'react-router-dom'

function Dashboard() {

    return (
        <div className="maindiv">
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
        
    )
}

export default Dashboard;