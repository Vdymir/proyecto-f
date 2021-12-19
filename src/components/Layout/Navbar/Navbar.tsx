import { Link } from 'react-scroll';
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
                            <Link to='section-bootstrap' smooth duration={600} spy>
                                Bootstrap
                            </Link>

                        </li>
                        <li>
                            <Link to='section-materialUi' smooth duration={600} spy>
                                Materia UI
                            </Link>
                        </li>
                        <li>
                            <Link to='section-tailwind' smooth duration={600} spy>
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
