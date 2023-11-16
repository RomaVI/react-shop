import Container from "react-bootstrap/Container";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({ item }) => {
    return (
        <Container className="mt-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

//'item' is missing in props validation eslint(react/prop-types) [Ln 7, Col 24]
//'item' is defined but never used. eslint(no-unused-vars) [Ln 7, Col 24] 
//' can be escaped with   
//'item' is  



