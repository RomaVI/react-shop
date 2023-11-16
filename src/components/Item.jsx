import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({ item }) => {
    return (
        <Container className=" blockCont">
            <Card >
                <Card.Img  className="itemImg" variant="top" src={item.pictureUrl} />
                <Card.Body className="superior">
                    <Card className="textSup">
                        <Card.Title>{item.title}</Card.Title>
                    <Link to={`/item/${item}`}> <Button className="botonItem">CHF   {item.price.toFixed(2)}</Button></Link>
                    </Card>
                    <Card.Text className="textInf">{item.descriptiom}</Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

//'item' is missing in props validation eslint(react/prop-types) [Ln 7, Col 24]
//'item' is defined but never used. eslint(no-unused-vars) [Ln 7, Col 24] 
//' can be escaped with   
//'item' is  



