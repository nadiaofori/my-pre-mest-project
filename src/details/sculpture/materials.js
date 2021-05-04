

const Materials =() => {

    return(
        <div>
            <div style={{display: "flex", justifyContent: "center", marginTop: "50px", color:"white",
            marginBottom: "25px", marginLeft: "30px", marginRight: "30px", fontFamily: `'Montserrat', sansSerif` }}>
                    <h1>MATERIALS USED IN SCULPTURE</h1>
            </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center",
          marginLeft: "30px", flexDirection:"column", fontFamily: `'Montserrat', sansSerif`,
          fontSize:"1.5em", color:"white" }}>
                    <li>Stone</li>
                    <li>Wood</li>
                    <li>Clay</li>
                    <li>Metal</li>
                    <li>Plaster</li>
                </div>
        </div>
    )
}
export default Materials;