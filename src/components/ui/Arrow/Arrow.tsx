import { Link, animateScroll as scroll } from "react-scroll";
import './index.css'


const Arrow = () => {
    return (
        <Link to='section-bootstrap'smooth duration={600} spy>
            <div className='arrow' />
        </Link>
    )
}

export default Arrow
