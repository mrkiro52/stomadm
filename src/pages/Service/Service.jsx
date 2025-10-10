import './Service.scss';
import Header from '../../components/Header/Header';

export default function Service() {
    localStorage.setItem('page', 'service');
    return (
        <div className="Service">
            <Header/>
        </div>
    )
}