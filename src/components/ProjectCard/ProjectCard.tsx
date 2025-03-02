import "./ProjectCard.css";
import { useState, useRef } from "react";
import Modal from "../Modal/Modal";
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
    const dialogRef = useRef<HTMLDialogElement>(null);

    // Open the dialog
    const openDialog = () => {
        setIsOpen(true);
        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    // Close the dialog
    const closeDialog = () => {
        setIsOpen(false);
        if (dialogRef.current) {
            dialogRef.current.close();
        }
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
                                <a className="button-style" onClick={openDialog}>See More Details</a>
                            </div>
                            {ProjectInfo.github ?
                                <div className="card-github">
                                    <a className="button-style" href={ProjectInfo.github}>See Github</a>
                                </div>
                                : ' '}
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <Modal
                    ProjectInfo={ProjectInfo}
                    closeDialog={closeDialog}
                    dialogRef={dialogRef}
                />
            )}
        </>
    )
}
