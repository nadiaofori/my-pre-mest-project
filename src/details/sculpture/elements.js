

const Elements = () => {


    return (
        <div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "50px", color:"white",
            marginBottom: "25px", marginLeft: "30px", marginRight: "30px", fontFamily: `'Montserrat', sansSerif` }}> 
                <h1>ELEMENTS OF SCULPTURE</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center",
          marginLeft: "30px", flexDirection:"column", fontFamily: `'Montserrat', sansSerif`,
          fontSize:"1.5em", color:"white" }}>
                <li>Shape</li>
                <li>Texture</li>
                <li>Space</li>
                <li>Colour</li>
                <li>Value</li>
                <li>Material</li>
                <li>Edge/ Mark making</li>
            </div>
        </div>
    )
}
export default Elements;