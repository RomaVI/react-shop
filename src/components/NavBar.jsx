import {useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { CardWidget } from '../components/CartWidget'




export const NavBar = () => {
    const [active,setActive] = useState(false);
    return (
        <>
            <header className="headerPrincipal">
                <div className="menuAndLogo">
                    <i className="fa fa-bars botonHamburguesa2" onClick={()=>{
                        setActive(!active);
                    }} ></i>
                    <div className="logoAndTitle">
                        <CardWidget />
                        <h1 className="NombrePagina">Damisela Azul</h1>
                    </div>
                </div>
                <input type="search" id="search" placeholder="Buscar...." />
            </header>
            <header className={`headerPlegable ${active ? 'active' : ''}`}>
                <div className="menuAndLogo">
                    <i className="fa fa-bars botonHamburguesa" onClick={()=>{
                        setActive(!active);
                    }} ></i>
                    <div className="logoAndTitle">
                        <CardWidget />
                        <h1 className="NombrePagina">Damisela Azul</h1>
                    </div>
                </div>

                <nav className='navCont'>
                    <ul className='contUl'>
                        <li className='liEstetic'><i className="liColor fa-solid fa-house"></i><a href="#">Inicio</a></li>
                        <li className='liEstetic'><i className="liColor fa-solid fa-shop"></i><a href="#">Mis Compras</a></li>
                        <li className='liEstetic'><i className="liColor fa-solid fa-heart"></i><a href="#">Favoritos</a></li>
                        <li className='liEstetic'><i className="liColor fa-solid fa-circle-user"></i><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </header></>
    );

};