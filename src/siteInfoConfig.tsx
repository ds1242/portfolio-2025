import GithubSVG from "./components/SVG/Github";
import LinkedInSVG from "./components/SVG/LinkedIn";

const config = 
{
    "header": [
        {
            "link_title": "About Me",
            "link_path": "/"
        },
        {
            "link_title": "Projects",
            "link_path": "/projects"
        },
        {
            "link_title": "Contact",
            "link_path": "/contact"
        }
    ],
    "footer": [
        {
            "link_title": "GitHub",
            "link_path": "https://github.com/ds1242",
            "svg" : <GithubSVG />
        },
        {
            "link_title": "LinkedIn",
            "link_path": "https://www.linkedin.com/in/david-shaw1242/",
            "svg" : <LinkedInSVG />
        }
    ],
    "projects": {},
    "homeInfo": {
        "blurb": "I am David Shaw a passionate frontend developer with three years of hands-on experience and a degree in Information Systems from the University of Utah. Currently based at the University of Tennessee creating high impact web applications for the Libraries. Always eager to expand my knowledge and skills by embracing new challenges and opportunities for growth.",
        "skillsIconClass": [
            "fa6-brands--golang",
            "devicon--python",
            "logos--javascript",
            "logos--html-5",
            "logos--css-3",
            "devicon--tailwindcss",
            "logos--mysql",
            "devicon--postgresql",
            "devicon--mongodb-wordmark",
            "skill-icons--graphql-dark",
            "devicon--nodejs-wordmark",
            "devicon--react",
            "skill-icons--github-light",
            "devicon--netlify"
        ]
    }

}

export default config;