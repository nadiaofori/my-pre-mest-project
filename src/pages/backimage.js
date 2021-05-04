import { useState, useEffect } from "react"

import  talkingd from'../images/talkingd.jpeg';
import Drums from '../images/Drums.png'

function BackImage({ children }) {
    const images = [ talkingd, Drums , 'https://octobergallery.co.uk/website_safezone/images/headers/medium/AG0569_Red_People_III__IML5468.jpg']
    const [image, setColor] = useState('https://octobergallery.co.uk/website_safezone/images/headers/medium/AG0569_Red_People_III__IML5468.jpg')

    const changeColor = (color) => {
        console.log('Setting a new state')
        setColor(color);
    }

   useEffect (() =>{
       
   }
   )

    setInterval(() => {
        let random = images[Math.floor(Math.random() * images.length)];
        changeColor(random)
        console.log(random)
    },
        1000 * 5
    );


    return (
        <div
            className="backimages"
            style={{ backgroundImage: `url(${image})`, width: '100vw', height: '100vh', backgroundRepeat: 'no-repeat' }}>
            {children}
        </div>
    );


}

export default BackImage;
