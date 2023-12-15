import { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import { FaTimes } from "react-icons/fa";
import { getFirestore, collection, addDoc } from "firebase/firestore"

import { CartContext } from "../contexts/CartContext";
import { IoTerminalSharp } from "react-icons/io5";


const clearBuyer = { name: "", phone: "", email: "", }



export const Cart = () => {
    const [buyer, setbuyer] = useState(clearBuyer);
    const { clear, items, removeItem } = useContext(CartContext);
    const total = items.reduce((acumulado, actual) => {
        return acumulado + actual.price
    }, 0)
    const hamdleSendOrder = () => {
        const order = { buyer, items, total: 1400, }

        
        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                alert("Su orden" + id + " ha sido completada!");
            }
        }).finally(() => {setbuyer(clearBuyer); clear();});
    };

    const handleChange = (e) => {
        const { name, value } = e.target
        setbuyer(prev => {
            return {
                ...prev,
                [name]: value,
            }
        });
    };
    if (items.length === 0) {
        return <Container>
            <div className="noComprasteNada">
                <p> Desea Comprar algo, revisa nuestro catalogo </p>
            </div>
            </Container>;
    }
    const totall = items.reduce((to, item) => to + item.price * item.quantity, 0);
    return (
        <>
            <Container className="container carrito">
                <div className="carritoSup">
                    <h3 className="carritoTitulo">Carrito de compras</h3>
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
                                
                                <p>{item.quantity}</p>
                                <p>€ {item.price*item.quantity}</p>
                            </div>
                            <div className="block2">
                                <button className="carritoButton" onClick={() => removeItem(item.id)}><FaTimes className="remover" />Remover </button>
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
                <div className="blockTotal">
                    <div className="total">
                        <p className="textTotal">Subtotal:</p>
                        <p className="subTotal">€ {totall}</p>
                    </div>
                    <div className="total">
                        <p className="textTotal">Envío gratuito:</p>
                        <p className="subTotal">€ 0,00</p>
                    </div>
                    <div className="sumTotal">
                        <p className="sumtxt">Total:</p>
                        <p className="sum">€ {totall}</p>
                    </div>
                    <div className="iva">
                        <p className="ivaP">IVA no incluido</p>
                    </div>
                </div>
                <div className="pagar">
                    <button className="container clearButton" >COMPLETAR EL PAGO</button>
                </div>
                <form>
                    <div className="input-group">
                        <label>
                            Nombre
                        </label>
                        <input type="text" value={buyer.name} onChange={handleChange} required name="name" />
                    </div>
                    <div className="input-group">
                        <label>
                            Telefono
                        </label>
                        <input type="text" value={buyer.phone} onChange={handleChange} required name="phone" />
                    </div>
                    <div className="input-group">
                        <label>
                            Email
                        </label>
                        <input type="email" value={buyer.email} onChange={handleChange} required name="email" />
                    </div>
                    <div className="pagar">
                        <button className="container clearButton" type="button" onClick={hamdleSendOrder}>PAGAR</button>

                    </div>
                </form>
            </Container>
        </>
    );
};


export default Cart;