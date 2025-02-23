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
    "projects": {}

}

export default config;