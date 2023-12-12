import { Link } from "react-router-dom"

import card from '../assets/card.png';

export const CardWidget = () => {
    return (
    <Link to="/Cart">
        <img src={card} alt="Logo de Damisela Azul" className='logo' />;
        <span>3</span>
    </Link> );
}
