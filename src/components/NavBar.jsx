import { NavLink, Link} from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "./Categories.css";

import 'font-awesome/css/font-awesome.min.css';
import { AiOutlineShopping } from "react-icons/ai";
import { HiBars3 } from "react-icons/hi2";
import { RiSearch2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { GiPearlNecklace } from "react-icons/gi";
import { IoGlasses } from "react-icons/io5";
import { GiClothes } from "react-icons/gi";
import { GiRamProfile } from "react-icons/gi";
import { GiDelicatePerfume } from "react-icons/gi";

import { products } from '../data/products';

const category = products.map((item) => item.category);
const uniqueCategories = new Set(category)

console.log([...uniqueCategories]);

export const NavBar = () => {
    const [active, setActive] = useState(true);
    const [activo, setActivo] = useState(true);
    const [scrollPosition, setScrollPosition] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const esPaginaDeInicio = location.pathname === '/';
    const titleScroll = scrollPosition > 0 ? 'titleSroll A' : 'titleSroll';
    const titleClass = esPaginaDeInicio ? titleScroll : 'titleSroll A';


    return (
        <>
            <header className='headerPrincipal'>
                <div className="menuAndLogo">
                    <div className="contacto">
                        <RxCross2 className="cruz" /><p>Póngase en contacto con nosotros</p>
                    </div>

                        <Link to="/">
                    <div className={`"logoAndTitle ${titleClass}`}>
                        <h1 >ENKI</h1>
                    </div>
                        </Link>

                    <div className="icons">

                        <AiOutlineShopping className="icon" />
                        <Link to="/Busqueda">
                        <RiSearch2Line className="icon" style={{ color: 'black' }} />
                        </Link>
                        <HiBars3 className="icon" onClick={() => {
                            setActive(!active);
                            console.log("¡El componente fue clicado!");
                        }} />
                    </div>
                </div>
            </header>
                        

            <header className={`headerPlegable ${active ? 'activado' : ''} `}>


                <nav className="navCont">
                    <ul className="contUl">

                        <li><RxCross2 className="liEstetic liColor hibar" onClick={() => {
                            setActive(!active);
                            console.log("¡El componente fue clicado!");
                        }} /></li>
                        <li>
                            <Link to="/">
                                <i className="liColor"><GiRamProfile className="ini" /></i>
                                <h3>ENKI</h3>
                            </Link>

                        </li>
                        {[...uniqueCategories].map((item) => (
                            <li key={item} className='liEstetic'>
                                <NavLink as={NavLink} to={`/Categoria/${item}`} activeClassName="active">
                                    <i className={'liColor'}>
                                        {item === 'Ropa de estacion' ? <GiClothes className="car" /> :
                                            item === 'Lentes' ? <IoGlasses className="swimmer" /> :
                                                item === 'Perfume' ? <GiDelicatePerfume className={'liColor'} /> :
                                                    <GiPearlNecklace className={'liColor'} />}
                                    </i>

                                    <h3>{item}</h3>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

        </>


    );
};


