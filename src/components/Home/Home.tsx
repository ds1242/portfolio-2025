import './Home.css'

export default function Home() {
    return (
        <div>
            <div className="hero-section">
                <div className='hero-content'>
                    <div className='hero-profile-img slide-right'>
                        <img src="src/assets/profile.webp" alt="picture of the website developer" />
                    </div>
                    <div className='hero-text slide-left'>
                        <h2>Welcome!</h2>
                        <p>
                            I am David Shaw a passionate frontend developer with three years of hands-on experience and a degree in Information Systems from the University of Utah. Currently based at the University of Tennessee creating high impact web applications for the Libraries. Always eager to expand my knowledge and skills by embracing new challenges and opportunities for growth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}