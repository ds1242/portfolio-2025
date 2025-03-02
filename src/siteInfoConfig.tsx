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
            "svg": <GithubSVG />
        },
        {
            "link_title": "LinkedIn",
            "link_path": "https://www.linkedin.com/in/david-shaw1242/",
            "svg": <LinkedInSVG />
        }
    ],
    "projects": [
        {
            "title": "University of Tennessee Libraries",
            "link": "https://live-libraries-mainsite.pantheonsite.io/",
            "github": "https://github.com/utkdigitalinitiatives/libraries-mainsite",
            "description": "This is the main website for the University of Tennessee in Knoxville's Libraries websites.  This site was using minimal imported modules.  I created the majority of the twig templates and styled with CSS mixed with Bootstrap 5.3 for layout.",
            "tools": [
                "Drupal 10", "Boostrap 5.3", "CSS", "Twig", "PHP", "Git"
            ],
            "image": "./src/assets/UTKMain.webp",
            "alt": "UTK website screenshot"
        },
        {
            "title": "UTK Library Database Search",
            "link": "https://utk-lib-db.netlify.app",
            "github": "https://github.com/utkdigitalinitiatives/utk-database-search",
            "description": "This combines several single metadata databases into a single application.  Built with Solr to expand discoverability for users.",
            "tools": [
                "Typescript", "TailwindCSS", "CSS", "Solr", "Netlify", "Git"
            ],
            "image": "./src/assets/DBSearch.webp",
            "alt": "UTK database search screenshot"
        },
        {
            "title": "Blog Aggregator",
            "github": "https://github.com/ds1242/gator",
            "description": "This is a CLI tool for scrapping RSS feeds.  It allows you to create a user, login, add feeds, and displays feeds. It can also be set to rescrape those feeds based on a time frame.",
            "tools": [
                "Go", "Git"
            ],
            "image": "./src/assets/gator.webp",
            "alt": "gator CLI tool in use"
        },
        {
            "title": "Highland Cow",
            "github": "https://github.com/ds1242/highland-cow",
            "description": "Full stack web app that I plan to expand to a React Native app that uses the phone camera to scan barcodes in.  Uses a Go REST API backend to a Postgres DB with a Typescript React frontend.  Not currently deployed but can run locally as a web application.",
            "tools": [
                "Go", "Typescript", "TailwindCSS", "Postgres", "REST", "Git"
            ],
            "image": "./src/assets/highlandcow.webp",
            "alt": "Highland cow dashboard screenshot"
        },
        {
            "title": "Maze Solver",
            "github": "https://github.com/ds1242/maze-solver",
            "description": "This project uses TKinter to build a maze. It uses recursion to build the maze.  It then uses Depth First Search to search through the maze.  It draws a red line on the current line and then turns gray when it reaches a dead end.",
            "tools": [
                "Python3", "TKinter", "Git"
            ],
            "image": "./src/assets/MazeSolver.webp",
            "alt": "Maze search solver screenshot"
        },
    ],
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
    // "contactInfo" : {
    //     "blurb": 
    // }

}

export default config;
