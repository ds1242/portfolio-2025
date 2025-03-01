
interface ProjectInfoProps {
    ProjectInfo: {
        title: string;
        link: string;
        github: string;
        description: string;
        tools: string[];
    };
}

export default function ProjectCard({ ProjectInfo }: ProjectInfoProps) {
    return (
        <>
            <div>{ProjectInfo.title}</div>
            <div>{ProjectInfo.link}</div>
        </>
    )
}
