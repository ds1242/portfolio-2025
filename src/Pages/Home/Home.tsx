import './Home.css'

interface HomeInfo {
    blurb: string;
    skillsIconClass: string[];
}

export default function Home(  homeInfo:HomeInfo  ) {

    return (
        <>
            <div className="hero-section inset-border">
                <div className='hero-content'>
                    <div className='hero-profile-img slide-right'>
                        <img src="src/assets/profile.webp" alt="picture of the website developer" />
                    </div>
                    <div className='hero-text slide-left'>
                        <h2>Welcome!</h2>
                        <p>
                            { homeInfo.blurb }
                        </p>
                    </div>
                </div>
            </div>
            <div className='skills inset-border bg-gradient'>
                <h2>Skills</h2>
                <div className='skills-icons fade-in'>
                    {homeInfo.skillsIconClass.map((iconCSS, index) => 
                        <div key={index} className='skills-icon-grid-items '>
                            <span className={iconCSS}></span>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}