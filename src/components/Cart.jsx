import { useContext } from "react";
import Container from "react-bootstrap/Container";

import { FaTimes } from "react-icons/fa";

import { CartContext } from "../contexts/CartContext";



export const Cart = () => {
    9
    const { clear, items } = useContext(CartContext);
    return (
        <>
            <Container className="container carrito">
                <div className="carritoSup">
                    <h3 className="carritoTitulo">Tu cesta de la compra</h3>
                    <button className="container clearButton" onClick={clear}>VACIAR LA CESTA</button>

                </div>
                <div className="carritoMid">
                    <p>Sus artículos</p>
                    <div className="mid2">
                        <p>Precio</p>
                        <p>Cantidad</p>
                        <p>Subtotal</p>
                    </div>

                </div>
                {items.map((item) => (
                    <div key={item.id} className="carritoDiv">

                        <div className="divBlock">
                            <div className="block1">
                                <p>€ {item.price}</p>
                                <input
                                    type="number"
                                    min="1"
                                    max="99"
                                    className="carritoCount"
                                    placeholder="1"
                                />
                                <p>€ {item.price}</p>
                            </div>
                            <div className="block2">
                                <button className="carritoButton"><FaTimes className="remover"/>Remover </button>
                            </div>
                        </div>
                        <div className="carritoEstetic">
                            <div className="countInfo">
                                <div className="infoDet">
                                    <h3 className="carritoTitle">{item.title}</h3>
                                    <p className="carritoDescription">{item.info}</p>
                                    <p> Articulo No.:P00812703 </p>
                                </div>
                                <p>Tamaño: <span>4 / XL</span></p>
                            </div>
                            <img className="carritoPictureUrl" src={item.pictureUrl} alt={`imagen de ${item.title}`} />
                        </div>
                    </div>
                ))}

            </Container>
        </>
    );
};


export default Cart;