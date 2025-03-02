import "./Projects.css"
import ProjectCard from "../../components/ProjectCard/ProjectCard"

interface ProjectInfo {
    CardVals: {
        title: string,
        link?: string,
        github: string,
        description: string,
        tools: string[],
        image: string,
        alt: string,
    }[];
}



export default function Projects({ CardVals }: ProjectInfo) {
    return (
        <div className="project-page bg-gradient">
            {CardVals.map((project, index) =>
                <ProjectCard key={index}
                    ProjectInfo={project}
                />
            )}
        </div>
    )
}
