import './Contacts.scss';
import Header from '../../components/Header/Header';

export default function Contacts() {
    localStorage.setItem('page', 'contacts');
    return (
        <div className="Contacts">
            <Header/>
        </div>
    )
}