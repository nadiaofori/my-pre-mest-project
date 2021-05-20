
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
                        <h1>𝓦𝓔𝓛𝓒𝓞𝓜𝓔 𝓣𝓞 𝓣𝓗𝓔 𝓜𝓐𝓖𝓘𝓒𝓐𝓛 𝓦𝓞𝓡𝓛𝓓 𝓞𝓕 <br />𝓐𝓡𝓣 𝓘𝓝 𝓖𝓗𝓐𝓝𝓐 </h1>
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
