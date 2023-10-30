import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import { CardWidget } from '../components/CartWidget';
//import { ItemListContainer } from '../components/ItemListContainer';
export const NavBar = () => {
    const [active, setActive] = useState(true);

    return (
            <>
            <header className="headerPrincipal">
                <div className="menuAndLogo">
                    <i
                        className="fa fa-bars botonHamburguesa2"
                        onClick={() => {
                            setActive(!active);
                        }}
                    ></i>
                    <div className="logoAndTitle">
                        <CardWidget />
                        <h1 className="NombrePagina">Damisela Azul</h1>
                    </div>
                </div>
                <input type="search" id="search" placeholder="Buscar...." />
            </header>


            <header className={`headerPlegable ${active ? 'active' : ''}`}>
                <div className="menuAndLogo">
                    <i
                        className="fa fa-bars botonHamburguesa"
                        onClick={() => {
                            setActive(!active);
                        }}
                    ></i>
                    <div className="logoAndTitle">
                        <CardWidget />
                        <h1 className="NombrePagina">Damisela Azul</h1>
                    </div>
                </div>

                <nav className="navCont">
                    <ul className="contUl">
                        <li className="liEstetic">
                            <i className="liColor fa fa-home"></i>
                            <a href="#">Inicio</a>
                        </li>
                        <li className="liEstetic">
                            <i className="liColor fa fa-shopping-cart"></i>
                            <a href="#">Mis Compras</a>
                        </li>
                        <li className="liEstetic">
                            <i className="liColor fa fa-heart"></i>
                            <a href="#">Favoritos</a>
                        </li>
                        <li className="liEstetic">
                            <i className="liColor fa fa-user"></i>
                            <a href="#">Contacto</a>
                        </li>
                    </ul>
                </nav>
            </header>
            </>
           
      
    );
};
