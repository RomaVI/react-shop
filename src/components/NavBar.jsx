import { NavLink } from "react-router-dom";

import 'font-awesome/css/font-awesome.min.css';
import { BsFillCarFrontFill } from 'react-icons/bs';
import { GiIsland } from 'react-icons/gi';
import { FaSwimmer } from 'react-icons/fa';
import { BiSolidShoppingBag } from 'react-icons/bi';


import { useState } from 'react';
import { CardWidget } from '../components/CartWidget';
//import { ItemListContainer } from '../components/ItemListContainer'

import { products } from '../data/products';

const category = products.map((item) => item.category);
const uniqueCategories = new Set(category)

console.log([...uniqueCategories]);


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
                <input type="search" id="search" placeholder="Buscar.." />
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
                            <NavLink to="/">
                            <i className="liColor"><GiIsland /></i>
                            <a href="#">Inicio</a>
                            </NavLink>
                        </li>
                        <li className="liEstetic">
                            <NavLink to={'/Categoria/MisCompras'}>
                            <i className="liColor"><BiSolidShoppingBag/></i>
                            <a >Mis Compras</a>
                            </NavLink>
                        </li>
                        {[...uniqueCategories].map((item) => (
                            <li key={item} className='liEstetic'>
                                <NavLink as={NavLink} to={`/Categoria/${item}`} activeClassName="active">
                                    <i className={'liColor'}> {item === 'Autos Clasicos' ? <BsFillCarFrontFill /> : <FaSwimmer />}</i>
                                    {item}
                                </NavLink>
                            </li>
                        ))}
                        
                    </ul>
                </nav>
            </header>
        </>


    );
};


/*
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
*/ 