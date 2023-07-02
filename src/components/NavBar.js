import React, { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [scrollY, setScrollY] = useState(0);
    const [navTransparent, setNavTransparent] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setNavTransparent(scrollY === 0);
    }, [scrollY]);

    useEffect(() => {
        const closeMenu = () => {
            setShowMenu(false);
        };

        const handleResize = () => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav
            style={{
                backgroundColor: navTransparent ? 'transparent' : '#141414',
            }}
        >
            <ul className={`menu ${showMenu ? 'open' : ''}`}>
                <li>
                    <Link to="/">
                        <img
                            src="https://www.caviarcriativo.com/storage/2020/06/logotipo-da-netflix.jpg"
                            alt="Netflix Logo"
                        />
                    </Link>
                </li>
                <li>
                    <Link to="/series">Séries</Link>
                </li>
                <li>
                    <Link to="/films">Filmes</Link>
                </li>
                <li>
                    <FaSearch />
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;