import { Link } from "react-scroll";
import './index.css'

interface Props {
    id: string
}

const Arrow = ({id}: Props) => {
    return (
        <Link to={id} smooth duration={600} spy>
            <div className='arrow' />
        </Link>
    )
}

export default Arrow
