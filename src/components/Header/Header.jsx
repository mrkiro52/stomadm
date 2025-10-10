import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import logo from './images/logo.png';
import './Header.scss';

export default function Header() {
    const [activePage, setActivePage] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const page = localStorage.getItem("page");
        if (page) setActivePage(page);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; }
    }, [menuOpen]);

    const links = [
        { path: "/about", label: "About us", key: "about" },
        { path: "/", label: "Services", key: "services" },
        { path: "/doctors", label: "Doctors", key: "doctors" },
        { path: "/reviews", label: "Reviews", key: "reviews" },
    ];

    // Новый обработчик
    const handleNavigate = (path, key) => {
        setActivePage(key);
        localStorage.setItem('page', key);

        // закрываем меню
        setMenuOpen(false);

        // ждём завершения анимации transform (.35s)
        setTimeout(() => {
            navigate(path);
        }, 350); // sync с transition в scss
    };

    return (
        <div className="Header">
            <div className="wrapper">
                <Link to="/" onClick={() => handleNavigate("/", "services")}>
                    <img src={logo} alt="logo" className='Header_logo'/>
                </Link>

                <div className="Header_links">
                    {links.map((link) => (
                        <Link
                            key={link.key}
                            to={link.path}
                            className={`Header_links__link ${activePage === link.key ? "selected" : ""}`}
                            onClick={(e) => {
                                e.preventDefault(); // отменяем мгновенный переход
                                handleNavigate(link.path, link.key);
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="Header_btns">
                    <button className="lang">
                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7815 0.210132C11.0727 0.490332 11.073 0.944591 10.7815 1.22463L6.02805 5.78987C5.73639 6.07004 5.26361 6.07004 4.97195 5.78987L0.218517 1.22463C-0.0729742 0.944591 -0.0727024 0.490332 0.218517 0.210132C0.510183 -0.0700439 0.983926 -0.0700439 1.27559 0.210132L5.5 4.26812L9.72441 0.210132C10.0161 -0.0700439 10.4898 -0.0700439 10.7815 0.210132Z" fill="#352100"/>
                        </svg>
                        <span>EN</span>
                        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7815 0.210132C11.0727 0.490332 11.073 0.944591 10.7815 1.22463L6.02805 5.78987C5.73639 6.07004 5.26361 6.07004 4.97195 5.78987L0.218517 1.22463C-0.0729742 0.944591 -0.0727024 0.490332 0.218517 0.210132C0.510183 -0.0700439 0.983926 -0.0700439 1.27559 0.210132L5.5 4.26812L9.72441 0.210132C10.0161 -0.0700439 10.4898 -0.0700439 10.7815 0.210132Z" fill="#352100"/>
                        </svg>
                    </button>
                    <Link
                        to="/contacts"
                        className={`Header_links__link ${activePage === 'contacts' ? "selected" : ""}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigate("/contacts", "contacts");
                        }}
                    >
                        Contacts
                    </Link>
                </div>

                <button
                    className={`Header_burger ${menuOpen ? 'is-open' : ''}`}
                    onClick={() => setMenuOpen(prev => !prev)}
                >
                    <svg width="39" height="26" viewBox="0 0 39 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.5V3.5H39V0.5H0.5Z" fill="#4E3629"/>
                        <path d="M0.5 11.4999V14.4999L39 14.5001V11.5001L0.5 11.4999Z" fill="#4E3629"/>
                        <path d="M0.5 22.5V25.5H39V22.5H0.5Z" fill="#4E3629"/>
                    </svg>
                </button>
            </div>

            {/* overlay */}
            <div
                className={`Header_overlay ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Мобильное меню */}
            <nav className={`Header_mobile ${menuOpen ? 'open' : ''}`}>
                <div className="Header_mobile__top">
                    <Link
                        to="/"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigate("/", "services");
                        }}
                    >
                        <img src={logo} alt="logo" className='Header_mobile__logo' />
                    </Link>
                    <button className="Header_mobile__close" onClick={() => setMenuOpen(false)}>✕</button>
                </div>

                <div className="Header_mobile__links">
                    {links.map((link) => (
                        <a
                            key={link.key}
                            href={link.path}
                            className={`Header_mobile__link ${activePage === link.key ? "selected" : ""}`}
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavigate(link.path, link.key);
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="/contacts"
                        className={`Header_mobile__link ${activePage === 'contacts' ? "selected" : ""}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigate("/contacts", "contacts");
                        }}
                    >
                        Contacts
                    </a>
                </div>
            </nav>
        </div>
    );
}
