import Image from '../images/book.png'
import image from '../images/art.png'
import imagee from '../images/travel.png'
import '../css/footer.css'


const Footer = () => {
    return (
        <div className="fpage">
        
            <div className="foot1">
                <img src={Image} alt="book" className="art" />
                <h2>Books</h2>
                <h4>Read about the various types of art</h4>
            </div>
            <div className="foot2">
                <img src={image} alt="artist" className="art" />
                <h2>Artist</h2>
                <h4>Discover famous artist in Ghana and their wonderful works</h4>
            </div>
            <div className="foot3">
                <img src={imagee} alt="tt" className="art" />
                <h2>Tourism</h2>
                <h4>Find tourist sites of art work in Ghana</h4>
            </div>
        </div>
    )
}
export default Footer;