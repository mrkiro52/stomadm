import './Header.scss';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

export default function Header() {
    return (
        <div className="Header">
            <Link to="/">
                <img src={logo} alt="logo" className='Header_logo'/>
            </Link>
            <div className="Header_links">
                <Link to="/" className="Header_links__link selected">About us</Link>
                <Link to="/" className="Header_links__link">Services</Link>
                <Link to="/" className="Header_links__link">Implants</Link>
                <Link to="/" className="Header_links__link">Hollywood Smile</Link>
                <Link to="/" className="Header_links__link">Doctors</Link>
                <Link to="/" className="Header_links__link">Reviews</Link>
                <Link to="/" className="Header_links__link">Gallery</Link>
                <Link to="/" className="Header_links__link">Contacts</Link>
            </div>
        </div>
    )
}