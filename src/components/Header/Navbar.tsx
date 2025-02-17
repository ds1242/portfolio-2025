import './Navbar.css';

export default function Navbar() {
    return (
        <div className="dark-background-text light-background-text navbar">
            <h1 className='brand'>
                David Shaw
            </h1>
            <ul className='links'>
                <li className='link-item'>
                    //
                    <a href="">
                        &nbsp;Home
                    </a>
                </li>
                <li className='link-item'>
                    //
                    <a href="">
                        &nbsp;About Me
                    </a>
                </li>
                <li className='link-item'>
                    //
                    <a href="">
                        &nbsp;Projects
                    </a>
                </li>
                <li className='link-item'>
                    //
                    <a href="">
                        &nbsp;Contact
                    </a>
                </li>
            </ul>
        </div>
    )
}

