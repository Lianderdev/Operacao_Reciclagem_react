import { Link} from 'react-router-dom';
import './style.css'

export function Button({ children, rounded, color, link }) {
    return (
        <>
            <div className="button">
                <Link
                    to={link}
                    className={`${rounded ? 'rounded' : ''} ${color ? 'color' + color : ''}`}>
                    {children}
                </Link>
            </div>
        </>
    )
}
