import "../css/Nav.css";
import { useState } from 'react';

const Nav = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <>
            <header>
                <div className="logo">Spotfiap</div>
                <div className="hamburger" onClick={toggleNavbar}>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
                <nav className={`navbar ${isActive ? 'active' : ''}`}>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/musicas">Musicas</a>
                        </li>
                        <li>
                            <a href="/login">Login</a>
                        </li>
                        
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Nav;
