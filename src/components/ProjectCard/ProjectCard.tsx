import "./ProjectCard.css";
import { useState, useRef } from "react";
interface ProjectInfoProps {
    ProjectInfo: {
        title: string;
        link: string;
        github: string;
        description: string;
        tools: string[];
        image: string,
        alt: string,
    };
};

export default function ProjectCard({ ProjectInfo }: ProjectInfoProps) {
    const [isOpen, setIsOpen] = useState(false);
    const dialogRef = useRef(null);

    // Open the dialog
    const openDialog = () => {
        setIsOpen(true);
        dialogRef.current.showModal();
    };

    // Close the dialog
    const closeDialog = () => {
        setIsOpen(false);
        dialogRef.current.close();
    };


    return (
        <>
            <div className="flip-card link-underline">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={ProjectInfo.image} alt={ProjectInfo.alt} />
                    </div>
                    <div className="flip-card-back">
                        <h2>{ProjectInfo.title}</h2>
                        <div className="flip-card-back-inner">
                            <div>
                                <button className="" onClick={openDialog}>See More Details</button>
                            </div>
                            {ProjectInfo.github ?
                                <div className="card-github">
                                    <a className="" href={ProjectInfo.github}>See Github</a>
                                </div>
                                : ' '}
                        </div>
                    </div>
                </div>
            </div>

            <dialog ref={dialogRef} className="modal">
                <button onClick={closeDialog}>X</button>
                <img src={ProjectInfo.image} alt={ProjectInfo.alt} />
                <h2>{ProjectInfo.title}</h2>
                <p>{ProjectInfo.description}</p>
                <h3 className='modal-tools-title'>Tools</h3>
                <div className="modal-tools">
                    {ProjectInfo.tools.map(tool =>
                        <p>{tool}</p>
                    )}
                </div>
                <div className="modal-links link-underline">
                    {ProjectInfo.link ?
                        <div className="modal-link">
                            <a href={ProjectInfo.link}>Visit this Site</a>
                        </div>
                        : ''}
                    {ProjectInfo.github ?
                        <div className="modal-github">
                            <a className="" href={ProjectInfo.github}>See Github</a>
                        </div>
                        : ' '}
                </div>
            </dialog>
        </>
    )
}
