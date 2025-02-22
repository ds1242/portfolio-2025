import GithubSVG from "./components/SVG/Github";
import LinkedInSVG from "./components/SVG/LinkedIn";

const config = 
{
    "header": [
        {
            "header_id": 1,
            "link_title": "Home",
            "link_path": "/"
        },
        {   
            "header_id": 2,
            "link_title": "About Me",
            "link_path": "/about"
        },
        {
            "header_id": 3,
            "link_title": "Projects",
            "link_path": "/projects"
        },
        {
            "header_id": 4,
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
    "projects": {}

}

export default config;