import "./Footer.css"

interface FooterProps {
    footerVals: {
        link_title: string,
        link_path: string,
        svg: React.ReactNode;
    }[];
}

export default function Footer({ footerVals }: FooterProps) {
    const d = new Date();
    const year = d.getFullYear();

    return (
        <div className="footer">
            <p className="info">My Info: </p>
            <ul className="info-list link-underline">
                {footerVals.map((val, index) =>
                    <li className="info-list-item" key={index}>
                        <a href={val.link_path}>
                            <div className="info-list-item-svg">
                                {val.svg}
                            </div>
                            <div className="info-list-item-title">
                                {val.link_title}
                            </div>
                        </a>
                    </li>
                )}
            </ul>
            <p className="year"> &#169; {year}</p>
        </div>
    )
}