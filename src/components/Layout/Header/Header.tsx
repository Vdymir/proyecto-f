import { URL_GITHUB } from '../../../constants';
import Arrow from '../../ui/Arrow';
import Navbar from '../Navbar';
import './index.css';

const Header = () => {

    const handleClick = () => window.open(URL_GITHUB)

    return (
        <header className='header'>
            <Navbar />
            <div className='header__container'>
                <div className='header__container-logos'>
                    <div className='header__logos' />
                </div>
                <div className="header__container-text">
                    <h1>¿PROYECTO <span>F</span>?</h1>
                    <p>Proyecto F es un proyecto personal el cual nace con el fin de aprender <span>frameworks</span> css. En este proyecto encontraremos varios <span>mini-proyectos</span> los cueles estaran estilado en su mayoria con frameworks css. <span>Inicialmente</span> estare creando mini-proyectos con <span>Bootstrap</span>, Tailwind y <span>Material-ui</span>.</p>
                    <p>By: <span onClick={handleClick} >Vdymir.</span></p>
                </div>
            </div>
            <Arrow id='section-bootstrap'/>
        </header>
    )
}

export default Header
