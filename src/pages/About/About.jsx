import './About.scss';
import Header from '../../components/Header/Header';

export default function About() {
    localStorage.setItem('page', 'about');
    return (
        <div className="About">
            <Header/>
        </div>
    )
}