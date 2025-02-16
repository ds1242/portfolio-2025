import './Navbar.css';

export default function Navbar() {
    return (
        <div className="dark-background-text light-background-text navbar">
            <h1 className='brand'>
                David Shaw
            </h1>
            <ul className='links'>
                <li className='link-item'>
                    <a href="">
                        // Home
                    </a>
                </li>
                <li className='link-item'>                    
                    <a href="">
                    // About Me
                    </a>
                </li>
                <li className='link-item'>                    
                    // Projects
                </li>
                <li className='link-item'>                    
                    // Contact
                </li>
            </ul>
        </div>
    )
}

