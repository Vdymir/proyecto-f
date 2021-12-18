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
                    <p>Lorem ipsum dolor sit amet consectetur, <span>adipisicing</span> elit. Non expedita quisquam ad aut deserunt repellendus <span>suscipit</span> amet fugiat incidunt harum a similique, ipsa odio dicta? Iusto <span>suscipit</span> dolor quia at.</p>
                    <p>By: <span onClick={handleClick} >Vdymir.</span></p>
                </div>
            </div>
            <Arrow id='section-bootstrap'/>
        </header>
    )
}

export default Header
