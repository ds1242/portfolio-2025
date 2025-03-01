import "./ProjectCard.css";
interface ProjectInfoProps {
    ProjectInfo: {
        title: string;
        link: string;
        github: string;
        description: string;
        tools: string[];
        image: string,
    };
};

export default function ProjectCard({ ProjectInfo }: ProjectInfoProps) {
    return (
        <>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={ProjectInfo.image} alt="" />
                    </div>
                    <div className="flip-card-back">
                        <h2>{ProjectInfo.title}</h2>
                        <div>{ProjectInfo.link}</div>
                        <div>{ProjectInfo.github}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
