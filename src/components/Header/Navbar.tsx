import { useState } from 'react';
import './Navbar.css';
import { navigateTo } from '../../utils/router';

interface HeaderProps {
    headerVals: {
        link_title: string;
        link_path: string;
    }[];
}

export default function Navbar({ headerVals }:HeaderProps) {
    const [isActive, setIsActive] = useState(false);

    const vals = headerVals;

    const toggleMenu = () => {
        setIsActive(!isActive);
    }

    return (
        <div className="dark-background-text light-background-text navbar">
            <h1 className='brand links'>
                <a onClick={() => navigateTo('/')}>
                    David Shaw
                </a>
            </h1>
            <ul className={`menu links link-underline ${isActive ? 'active' : ''}`}>
                {vals.map((val, index) =>
                    <li className='link-item' key={index + val.link_title}>
                    //
                        <a onClick={() => navigateTo(val.link_path)}>
                            &nbsp;{val.link_title}
                        </a>
                    </li>
                )}
            </ul>
            <div className='hamburger' onClick={toggleMenu}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 17h18a1 1 0 0 1 .117 1.993L21 19H3a1 1 0 0 1-.117-1.993L3 17h18H3Zm0-6 18-.002a1 1 0 0 1 .117 1.993l-.117.007L3 13a1 1 0 0 1-.117-1.993L3 11l18-.002L3 11Zm0-6h18a1 1 0 0 1 .117 1.993L21 7H3a1 1 0 0 1-.117-1.993L3 5h18H3Z" fill="#f1faee"/>
                </svg>
            </div>
        </div>
    )
}

