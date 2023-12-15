import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const Item = ({ item }) => {
    return (
        <div className="blockCont">
            <Card className="tamCardBlock">
                <div className="subCard">
                    <div className="tamCardTitle">
                        <p>NEW ARRIVAL</p>
                    </div>
                    <div className="TamCardApuntar"></div>
                </div>

                <Card.Img className="itemImg" variant="top" src={item.pictureUrl} />
                <Card.Body className="cardBody">
                    <Card className="textSup">
                        <Card.Title>{item.title}</Card.Title>
                    </Card>
                    <Card.Text className="textInf">{item.descriptiom}</Card.Text>
                    {typeof item.price === 'number' ? (
                        <Link to={`/item/${item.id}`}>
                            <Button className="botonItem">€ {item.price.toFixed(2)}</Button>
                        </Link>
                    ) : (
                        <p>Invalid price</p>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

//'item' is missing in props validation eslint(react/prop-types) [Ln 7, Col 24]
//'item' is defined but never used. eslint(no-unused-vars) [Ln 7, Col 24]
//' can be escaped with
//'item' is  



