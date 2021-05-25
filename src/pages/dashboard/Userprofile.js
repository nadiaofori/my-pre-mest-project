// import Newordercss from "./Neworder.module.css";
import "../../css/Userprofile.css"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Userprofile = () => {
  return (
    <div className="main">
      <div className="upperdiv">
         <p>User Profile</p> 
         <p>Welcome to the margic of art</p>
      </div>
      
      <div className="lowerdiv">
        <div className="newform">
            
          <Form>
          <div className="introduction">
            
            <h2>Add your profile </h2>
            <Form.Group controlId="formGridName">
              <Form.Label>Contact Name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Phone</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>
            </div>
            <div className="special">
            <h2>Specialty</h2>
            <Form.Group controlId="formGridState">
              <Form.Label>Field of Work</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>Sculpture</option>
                <option>Painting and Drawing</option>
                <option>Pottery or ceramics</option>
                <option>Leather Work</option>
                <option>Textile Work</option>
              </Form.Control>
            </Form.Group>
            </div>
            <div className="locate">
            <h2>Where are you located</h2>
            <Form.Group controlId="formGridState">
              <Form.Label>Regions</Form.Label>
              <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>Greater Accra</option>
                <option>Ashanti</option>
                <option>Bono East</option>
                <option>Western</option>
                <option>Northern</option>
                <option>Savanna</option>
                <option>Oti</option>
                <option>Upper East</option>
                <option>Upper West</option>
                <option>Eastern</option>
              </Form.Control>
            </Form.Group>
            </div>
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
     
        {/* <div className={Newordercss.imagecontainer}>
          <img src={corodel} alt="coro" height="50%" width="100%" />
        </div> */}
      </div>
    </div>
  );
};

export default Userprofile;