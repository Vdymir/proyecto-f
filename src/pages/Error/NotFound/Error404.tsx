import { Link } from 'react-router-dom'
import NotFoundI from '../../../assets/img/notFound.svg';
import './index.css';

const Error404 = () => {
    return (
        <main className='notFound'>
            <div className='notFound__img'>
                <img src={NotFoundI} alt="error 404" loading="lazy" />
            </div>
            <div className='notFound__txt'>
                <h1> <span>¡UPS!</span> Error-404</h1>
                <p>La pagina a la intenta ingresar no existe, haga click <Link to='/'>  <span>aquí</span> </Link>para regresar.</p>
            </div>
        </main>
    )
}

export default Error404
