
import TextAnimation from 'react-animate-text'
import '../css/home.css'
// import { useHistory } from "react-router-dom"
// import Button from "../components/button";
// import BackImage from "../pages/backimage"
import Navbar from './navbar'
import Footer from './footer'


function Home() {
   
    
    return (
        <>
            <div className="wpage">
                <div className="nad">
                <Navbar />

                </div>
                <div className="mpage" >
                   <TextAnimation>
                        <h1>Welcome to the margical world<br /> of art work in Ghana</h1>
                    </TextAnimation> 
                </div>
                <div className="food">
                <Footer />

                </div>
            </div>
        </>
    )
}
export default Home;
