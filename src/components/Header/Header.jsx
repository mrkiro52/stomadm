import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import logo from './images/logo.png';
import './Header.scss';

export default function Header() {
    const [activePage, setActivePage] = useState("");
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const [menuLayered, setMenuLayered] = useState(false);
    const [showLayer, setShowLayer] = useState(false);
    
    useEffect(() => {
      if (menuLayered) setShowLayer(true); // показываем сразу
      else {
        const timer = setTimeout(() => setShowLayer(false), 350); // удаляем после анимации
        return () => clearTimeout(timer);
      }
    }, [menuLayered]);

    useEffect(() => {
        const page = localStorage.getItem("page");
        if (page) setActivePage(page);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; }
    }, [menuOpen]);

    const links = [
        { path: "/service", label: "Services", key: "services", hasArrow: true },
        { path: "/about", label: "About us", key: "about" },
        { path: "/doctors", label: "Doctors", key: "doctors" },
        { path: "/reviews", label: "Reviews", key: "reviews" },
        { path: "/gallery", label: "Gallery", key: "gallery"},
    ];    

    const [selected, setSelected] = useState("EN"); // выбранный язык
    const [open, setOpen] = useState(false); // открыто ли меню

    const languages = ["EN", "RU", "TR", "ES"]; // английский, русский, турецкий, испанский
    const otherLanguages = languages.filter(lang => lang !== selected);

    const handleSelect = (lang) => {
        setSelected(lang);
        setOpen(false);
    };


    // Новый обработчик
    const handleNavigate = (path, key) => {
        setActivePage(key);
        localStorage.setItem('page', key);

        // закрываем меню
        setMenuOpen(false);

        // ждём завершения анимации transform (.35s)
        setTimeout(() => {
            navigate(path);
        }, 300); // sync с transition в scss
    };

    const servicesData = [
        {
          category: "Cosmetic Dentistry",
          services: [
            "Filling",
            "Teeth Cleaning", 
            "Teeth Whitening",
            "E-max Veneers",
            "E-max Crown",
            "Gingivoplasty",
            "Botox"
          ]
        },
        {
          category: "Dental Implants", 
          services: [
            "Zirconia Crown on Tooth",
            "Zirconia Crown on Implant", 
            "Bone Grafting",
            "Sinus Lifting",
            "Piezolifting"
          ]
        },
        {
          category: "Specialty Treatments",
          services: [
            "Root Canal Treatment",
            "Tooth Extraction", 
            "Wisdom Tooth Extraction",
            "Cystectomy",
            "Apicoectomy", 
            "Flap Surgery",
            "Curottage"
          ]
        },
        {
          category: "Orthodontics",
          services: [
            "Braces",
            "Aligners",
            "Night Guard"
          ]
        }
      ];


      useEffect(() => {
        if (!showLayer) return; // если слой скрыт, ничего не делаем
    
        function handleClick(event) {
          // проверяем, кликнули ли именно по blur
          if (event.target.classList.contains("blur")) {
            setShowLayer(false);
            setMenuLayered(false); // закрываем также menuLayered
          }
        }
    
        document.addEventListener("click", handleClick);
    
        return () => {
          document.removeEventListener("click", handleClick);
        };
      }, [showLayer, setShowLayer, setMenuLayered]);

    return (
        <div className={menuLayered ? "Header opened" : "Header"}>
            {showLayer && <div className="blur"></div>}
            <div className={menuLayered ? "wrapper opened" : "wrapper"}>
                <div className="left">
                    <Link to="/" onClick={() => handleNavigate("/", "services")}>
                        <img src={logo} alt="logo" className='Header_logo'/>
                    </Link>

                    <div className="Header_links">
                        {links.map((link) => {
                            if (link.key === "services") {
                            // Для Services используем кнопку
                            return (
                                <button
                                key={link.key}
                                type="button"
                                className="Header_links__link services"
                                onClick={() => {
                                    setMenuLayered(!menuLayered);
                                    setTimeout(() => setShowLayer(!menuLayered), 50); // маленькая задержка
                                }}
                                >
                                <span className="Header_links__inner">
                                    {link.label}
                                    <svg
                                    width="12"
                                    height="6"
                                    viewBox="0 0 12 6"
                                    style={showLayer ? {transform: 'rotate(180deg)', transition: 'all 0.2s'} : {transform: 'rotate(0deg)', transition: 'all 0.2s'}}
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M11.0037 0.210132C11.2949 0.490332 11.2951 0.944591 11.0037 1.22463L6.25022 5.78987C5.95855 6.07004 5.48578 6.07004 5.19412 5.78987L0.440685 1.22463C0.149194 0.944591 0.149466 0.490332 0.440685 0.210132C0.732351 -0.0700439 1.20609 -0.0700439 1.49776 0.210132L5.72217 4.26812L9.94658 0.210132C10.2382 -0.0700439 10.712 -0.0700439 11.0037 0.210132Z"
                                        fill="#352100"
                                    />
                                    </svg>
                                </span>
                                </button>
                            );
                            }

                            // Остальные ссылки остаются Link
                            return (
                            <Link
                                key={link.key}
                                to={link.path}
                                className={`Header_links__link ${activePage === link.key ? "selected" : ""}`}
                            >
                                <span className="Header_links__inner">{link.label}</span>
                            </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="Header_btns">
                <div className="language-wrapper">
                    <button className="lang" onClick={() => setOpen(!open)}>
                        <svg style={{opacity: 0}} width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7815 0.210132C11.0727 0.490332 11.073 0.944591 10.7815 1.22463L6.02805 5.78987C5.73639 6.07004 5.26361 6.07004 4.97195 5.78987L0.218517 1.22463C-0.0729742 0.944591 -0.0727024 0.490332 0.218517 0.210132C0.510183 -0.0700439 0.983926 -0.0700439 1.27559 0.210132L5.5 4.26812L9.72441 0.210132C10.0161 -0.0700439 10.4898 -0.0700439 10.7815 0.210132Z" fill="#352100"/>
                        </svg>
                        <span>{selected}</span>
                        <svg style={open ? {transform: 'rotate(180deg)', transition: 'all 0.2s'} : {transform: 'rotate(0deg)', transition: 'all 0.2s'}} width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.7815 0.210132C11.0727 0.490332 11.073 0.944591 10.7815 1.22463L6.02805 5.78987C5.73639 6.07004 5.26361 6.07004 4.97195 5.78987L0.218517 1.22463C-0.0729742 0.944591 -0.0727024 0.490332 0.218517 0.210132C0.510183 -0.0700439 0.983926 -0.0700439 1.27559 0.210132L5.5 4.26812L9.72441 0.210132C10.0161 -0.0700439 10.4898 -0.0700439 10.7815 0.210132Z" fill="#352100"/>
                        </svg>
                    </button>

                    <div className={`lang-menu ${open ? "open" : ""}`}>
                        {otherLanguages.map((lang, idx) => (
                        <button
                            key={idx}
                            className="lang-item"
                            onClick={() => handleSelect(lang)}
                        >
                            {lang}
                        </button>
                        ))}
                    </div>
                    </div>
                    <Link
                        to="/contacts"
                        className={`Header_links__link contacts ${activePage === 'contacts' ? "selected" : ""}`}
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

            {showLayer && (
                <div className={`layers ${menuLayered ? 'shown' : ''}`}>
                {servicesData.map((category, index) => (
                  <div className="col" key={index}>
                    <span>{category.category}</span>
                    {category.services.map((service, serviceIndex) => (
                      <a href="#" key={serviceIndex}>{service}</a>
                    ))}
                  </div>
                ))}
              </div>
            )}

            {/* overlay */}
            <div
                className={`Header_overlay ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Мобильное меню */}
            <nav className={`Header_mobile ${menuOpen ? 'open' : ''}`}>
                <div className="Header_mobile__top">
                    <Link
                        to="/service"
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
