import '../../css/pottery.css'


const Pottery = () => {

    return (
        <div>
            <div className="hero-image">
                <div className="hero-text">
                    <h1>Ceramics and Pottery</h1>
                </div>

            </div>

            <div className="texts">
                <h3 style={{ marginBottom: "10px", fontSize: "x-large" }}>Definition</h3>
                <p style={{ marginTop: "10px", fontSize: "large" }}>A ceramic is an inorganic non-metallic solid made up of either metal or non-metal compounds
                that have been shaped and then hardened by heating to high temperatures.
                    It can simply mean pots and other articles made from clay hardened by heat.</p>

                <h3 style={{ marginBottom: "10px", marginTop: "10px", fontSize: "x-large" }}>Types of Ceramics</h3>
                <li style={{ marginTop: "10px", fontSize: "large" }}>Earthenware</li>
                <li style={{ marginTop: "10px", fontSize: "large" }}>Stoneware</li>
                <li style={{ marginTop: "10px", fontSize: "large" }}>Porcelain</li>


                <h3 style={{ marginBottom: "10px", marginTop: "10px", fontSize: "x-large" }}>Properties</h3>
                <li style={{ marginTop: "10px", fontSize: "large" }}>High melting point. Thus, they are heat resistant</li>
                <li style={{ marginTop: "10px", fontSize: "large" }}>Durability; they are long-lasting and hard-wearing</li>

                <h3 style={{ marginBottom: "10px", marginTop: "10px", fontSize: "x-large" }}> Uses </h3>
                <li style={{ marginTop: "10px", fontSize: "large" }}> It is used in gas turbine engines</li>
                <li style={{ marginTop: "10px", fontSize: "large" }}>It is used as clay pot refrigerator</li>
                <li style={{ marginTop: "10px", fontSize: "large" }}> It is used for potting plants</li>
                <li style={{ marginTop: "10px", fontSize: "large" }}>To line the bottoms of planters</li>
                <li style={{ marginTop: "10px", fontSize: "large" }}>It is used as candle heater</li>
            </div>
        </div>
    )
}
export default Pottery;