import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from './images/logo.png';
import { useTranslation } from 'react-i18next';
import './Header.scss';

export default function Header() {
    const [activePage, setActivePage] = useState('');
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const { t, i18n } = useTranslation(); // Access translation function and i18n instance

    const [menuLayered, setMenuLayered] = useState(false);
    const [showLayer, setShowLayer] = useState(false);

    useEffect(() => {
        if (menuLayered) setShowLayer(true); // Show immediately
        else {
            const timer = setTimeout(() => setShowLayer(false), 350); // Hide after animation
            return () => clearTimeout(timer);
        }
    }, [menuLayered]);

    useEffect(() => {
        const page = localStorage.getItem('page');
        if (page) setActivePage(page);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    // Navigation links with translated labels
    const links = [
        { path: '/services', label: t('header_link_services'), key: 'services', hasArrow: true },
        { path: '/about', label: t('header_link_aboutus'), key: 'about' },
        { path: '/doctors', label: t('header_link_doctors'), key: 'doctors' },
        { path: '/reviews', label: t('header_link_reviews'), key: 'reviews' },
        { path: '/gallery', label: t('header_link_gallery'), key: 'gallery' },
    ];

    const [selected, setSelected] = useState(i18n.language || 'en'); // Selected language
    const [open, setOpen] = useState(false); // Language menu open state

    useEffect(() => {
        // Update selected state when i18n language changes
        setSelected(i18n.language);
    }, [i18n.language]);

    const languages = ['en', 'ru', 'tr']; // English, Russian, Turkish
    const otherLanguages = languages.filter(lang => lang !== selected);

    const handleSelect = (lang) => {
        i18n.changeLanguage(lang);
        setSelected(lang);
        setOpen(false);
    };

    const handleNavigate = (path, key) => {
        setActivePage(key);
        localStorage.setItem('page', key);
        setMenuOpen(false);
        setTimeout(() => {
            navigate(path);
        }, 300); // Sync with transition in SCSS
    };

    // Services data with translated categories and services, including English slugs
    const servicesData = [
        {
            category: t('header_topics_cosmetic_dentistry'),
            services: [
                { label: t('service_filling_title'), slug: 'filling' },
                { label: t('service_teeth_cleaning_title'), slug: 'teeth-cleaning' },
                { label: t('service_teeth_whitening_title'), slug: 'teeth-whitening' },
                { label: t('service_e_max_veneers_title'), slug: 'e-max-veneers' },
                { label: t('service_e_max_crown_title'), slug: 'e-max-crown' },
                { label: t('service_gingivoplasty_title'), slug: 'gingivoplasty' },
                { label: t('service_botox_title'), slug: 'botox' },
            ],
        },
        {
            category: t('header_topics_dental_implants'),
            services: [
                { label: t('service_zirconia_crown_on_tooth_title'), slug: 'zirconia-crown-on-tooth' },
                { label: t('service_zirconia_crown_on_implant_title'), slug: 'zirconia-crown-on-implant' },
                { label: t('service_bone_grafting_title'), slug: 'bone-grafting' },
                { label: t('service_sinus_lifting_title'), slug: 'sinus-lifting' },
                { label: t('service_piezolifting_title'), slug: 'piezolifting' },
            ],
        },
        {
            category: t('header_topics_specialty_treatments'),
            services: [
                { label: t('service_root_canal_treatment_title'), slug: 'root-canal-treatment' },
                { label: t('service_tooth_extraction_title'), slug: 'tooth-extraction' },
                { label: t('service_wisdom_tooth_extraction_title'), slug: 'wisdom-tooth-extraction' },
                { label: t('service_cystectomy_title'), slug: 'cystectomy' },
                { label: t('service_apicoectomy_title'), slug: 'apicoectomy' },
                { label: t('service_flap_surgery_title'), slug: 'flap-surgery' },
                { label: t('service_curottage_title'), slug: 'curottage' },
            ],
        },
        {
            category: t('header_topics_orthodontics'),
            services: [
                { label: t('service_braces_title'), slug: 'braces' },
                { label: t('service_aligners_title'), slug: 'aligners' },
                { label: t('service_night_guard_title'), slug: 'night-guard' },
            ],
        },
    ];

    useEffect(() => {
        if (!showLayer) return;

        function handleClick(event) {
            if (event.target.classList.contains('blur')) {
                setShowLayer(false);
                setMenuLayered(false);
            }
        }

        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
        };
    }, [showLayer]);

    return (
        <div className={menuLayered ? 'Header opened' : 'Header'}>
            {showLayer && <div className="blur"></div>}
            <div className={menuLayered ? 'wrapper opened' : 'wrapper'}>
                <div className="left">
                    <Link to="/" onClick={() => handleNavigate('/', 'home')}>
                        <img src={logo} alt={t('header_logo_alt')} className="Header_logo" />
                    </Link>

                    <div className="Header_links">
                        {links.map(link => {
                            if (link.key === 'services') {
                                return (
                                    <Link
                                        key={link.key}
                                        to={link.path}
                                        className={`Header_links__link services ${activePage === link.key ? 'selected' : ''}`}
                                        onClick={() => handleNavigate(link.path, link.key)}
                                    >
                                        <span className="Header_links__inner">
                                            {link.label}
                                        </span>
                                    </Link>
                                );
                            }

                            return (
                                <Link
                                    key={link.key}
                                    to={link.path}
                                    className={`Header_links__link ${activePage === link.key ? 'selected' : ''}`}
                                    onClick={() => handleNavigate(link.path, link.key)}
                                >
                                    <span className="Header_links__inner">{link.label}</span>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="Header_btns">
                    <div className="language-wrapper">
                        <button
                            className="lang"
                            onClick={() => setOpen(!open)}
                            aria-label={t('header_select_language', { current: selected })}
                        >
                            <svg
                                style={{ opacity: 0 }}
                                width="11"
                                height="6"
                                viewBox="0 0 11 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.7815 0.210132C11.0727 0.490332 11.073 0.944591 10.7815 1.22463L6.02805 5.78987C5.73639 6.07004 5.26361 6.07004 4.97195 5.78987L0.218517 1.22463C-0.0729742 0.944591 -0.0727024 0.490332 0.218517 0.210132C0.510183 -0.0700439 0.983926 -0.0700439 1.27559 0.210132L5.5 4.26812L9.72441 0.210132C10.0161 -0.0700439 10.4898 -0.0700439 10.7815 0.210132Z"
                                    fill="#352100"
                                />
                            </svg>
                            <span>{selected}</span>
                            <svg
                                style={
                                    open
                                        ? { transform: 'rotate(180deg)', transition: 'all 0.2s' }
                                        : { transform: 'rotate(0deg)', transition: 'all 0.2s' }
                                }
                                width="11"
                                height="6"
                                viewBox="0 0 11 6"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.7815 0.210132C11.0727 0.490332 11.073 0.944591 10.7815 1.22463L6.02805 5.78987C5.73639 6.07004 5.26361 6.07004 4.97195 5.78987L0.218517 1.22463C-0.0729742 0.944591 -0.0727024 0.490332 0.218517 0.210132C0.510183 -0.0700439 0.983926 -0.0700439 1.27559 0.210132L5.5 4.26812L9.72441 0.210132C10.0161 -0.0700439 10.4898 -0.0700439 10.7815 0.210132Z"
                                    fill="#352100"
                                />
                            </svg>
                        </button>

                        <div className={`lang-menu ${open ? 'open' : ''}`}>
                            {otherLanguages.map((lang, idx) => (
                                <button key={idx} className="lang-item" onClick={() => handleSelect(lang)}>
                                    {lang}
                                </button>
                            ))}
                        </div>
                    </div>
                    <Link
                        to="/contacts"
                        className={`Header_links__link contacts ${activePage === 'contacts' ? 'selected' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigate('/contacts', 'contacts');
                        }}
                    >
                        <span className="Header_links__inner">{t('header_link_contacts')}</span>
                    </Link>
                </div>

                <button
                    className={`Header_burger ${menuOpen ? 'is-open' : ''}`}
                    onClick={() => setMenuOpen(prev => !prev)}
                    aria-label={menuOpen ? t('header_close_menu') : t('header_open_menu')}
                >
                    <svg width="39" height="26" viewBox="0 0 39 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.5V3.5H39V0.5H0.5Z" fill="#4E3629" />
                        <path d="M0.5 11.4999V14.4999L39 14.5001V11.5001L0.5 11.4999Z" fill="#4E3629" />
                        <path d="M0.5 22.5V25.5H39V22.5H0.5Z" fill="#4E3629" />
                    </svg>
                </button>
            </div>

            {showLayer && (
                <div className={`layers ${menuLayered ? 'shown' : ''}`} role="menu">
                    {servicesData.map((category, index) => (
                        <div className="col" key={index}>
                            <span>{category.category}</span>
                            {category.services.map((service, serviceIndex) => {
                                const path = '/service/' + service.slug;
                                return (
                                    <Link
                                        key={serviceIndex}
                                        to={path}
                                        role="menuitem"
                                        onClick={() => {
                                            setMenuLayered(false);
                                            setShowLayer(false);
                                        }}
                                    >
                                        {service.label}
                                    </Link>
                                );
                            })}
                        </div>
                    ))}
                </div>
            )}

            <div className={`Header_overlay ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)} />

            <nav className={`Header_mobile ${menuOpen ? 'open' : ''}`}>
                <div className="Header_mobile__top">
                    <Link
                        to="/"
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigate('/', 'home');
                        }}
                    >
                        <img src={logo} alt={t('header_logo_alt')} className="Header_mobile__logo" />
                    </Link>
                    <button
                        className="Header_mobile__close"
                        onClick={() => setMenuOpen(false)}
                        aria-label={t('header_close_menu')}
                    >
                        ✕
                    </button>
                </div>

                <div className="Header_mobile__links">
                    {links.map(link => (
                        <a
                            key={link.key}
                            href={link.path}
                            className={`Header_mobile__link ${activePage === link.key ? 'selected' : ''}`}
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
                        className={`Header_mobile__link ${activePage === 'contacts' ? 'selected' : ''}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handleNavigate('/contacts', 'contacts');
                        }}
                    >
                        {t('header_link_contacts')}
                    </a>
                </div>

                <div className="Header_mobile__language">
                    <div className="language-wrapper-mobile">
                        <span className="language-label">{t('header_select_language_label')}</span>
                        <div className="language-buttons">
                            {languages.map((lang) => (
                                <button
                                    key={lang}
                                    className={`lang-item-mobile ${selected === lang ? 'active' : ''}`}
                                    onClick={() => handleSelect(lang)}
                                >
                                    {lang}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}