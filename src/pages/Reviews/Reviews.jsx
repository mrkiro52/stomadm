import './Reviews.scss';
import Header from '../../components/Header/Header';

export default function Reviews() {
    localStorage.setItem('page', 'reviews');
    return (
        <div className="Reviews">
            <Header/>
        </div>
    )
}