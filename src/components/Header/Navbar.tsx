import './Navbar.css';

interface HeaderProps {
    headerVals: {
        header_id: number;
        link_title: string;
        link_path: string;
    }[];
}

export default function Navbar({ headerVals }:HeaderProps) {

    const vals: HeaderProps[] = headerVals;

    console.log(vals)
    return (
        <div className="dark-background-text light-background-text navbar">
            <h1 className='brand'>
                David Shaw
            </h1>
            <ul className='links'>
                {vals.map(val =>
                    // {console.log(val)}
                    <li className='link-item' key={val.header_id + val.link_title}>
                    //
                        <a href={val.link_path}>
                            &nbsp;{val.link_title}
                        </a>
                    </li>
                )}

            </ul>
        </div>
    )
}

