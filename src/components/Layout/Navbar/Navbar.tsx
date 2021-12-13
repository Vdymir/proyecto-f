import { Link } from 'react-router-dom'
import './index.css';

const Navbar = () => {
    return (
        <nav className='navBar'>
            <div className="navbar__container">
                <div className="navBar__container-logo">
                    <span>Proyecto F</span>
                </div>
                <div className="navBar__container-enlaces">
                    <ul>
                        <li>
                            <Link to='booststrap'>
                                Booststrap
                            </Link>
                        </li>
                        <li>
                            <Link to='materia_ui'>
                                Materia UI
                            </Link>
                        </li>
                        <li>
                            <Link to='tailwind'>
                                Tailwind
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
