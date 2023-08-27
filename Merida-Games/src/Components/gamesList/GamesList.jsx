import { useState,useEffect } from "react";
import {GamesHandler} from "../../handler/GamesHandler";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';

function GamesList() {

    const [games, setGames] = useState([]);
    useEffect(() => {

        getData();

      }, []);

      const getData = async () => {
        const data = await GamesHandler.loadGames();
        setGames(data);
      };
   


    return(

        <>
        <Row style={{gap: 0.5, flexDirection:"revert" ,justifyContent:'space-evenly', paddingTop:'2.5rem' }} xs={2} md={3} lg={4} className="g-4"> 




<Col style={{justifyContent:'space-evenly'}} xs={2} md={2} lg={3}> </Col>   
<Col style={{justifyContent:'space-evenly'}} xs={2} md={2} lg={3}> </Col>
<Col style={{justifyContent:'space-evenly'}} xs={2} md={2} lg={3}> </Col>

            {
              games.map(g => (
              
              
                <Card key={g.id} style={{backgroundColor:"rgba(135, 135, 135, 0.7)"}} >
                
                <Card.Img variant="top" src={g.img} style={{marginTop: "3%"}} />
                
                <Card.Body >
                <Card.ImgOverlay style={{marginTop:"25%", height:"5%", marginLeft:"25%"}}>
                  <Card.Title style={{backgroundColor:"rgba(233,236,239,0.1", fontSize:"25px"}}>{g.name}</Card.Title>
                  </Card.ImgOverlay>
                  </Card.Body>
                 
                  <Card.Footer style={{display:"flex", flexDirection:"row",justifyContent:'space-evenly', alignContent:"flex-end"}}>
                  {/* <Link to={`/editImage/${i.id}`} ><Button variant="outline-dark" size='lg'>Edit</Button></Link> */}
                  {/* <Button variant="outline-dark" size='lg' onClick={()=>deleteImage(i.id)}>Delete</Button> */}
                  </Card.Footer>
                </Card>

              
              
              ))
            }

             </Row> 
        </>
      
    
    )
}

export default GamesList;
