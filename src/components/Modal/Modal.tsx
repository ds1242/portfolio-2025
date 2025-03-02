import "./Modal.css";
import { useEffect } from "react";

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
    closeDialog: () => void;
    dialogRef: React.RefObject<HTMLDialogElement | null>
};

export default function Modal({ ProjectInfo, closeDialog, dialogRef }: ProjectInfoProps) {

    useEffect(() => {
        if (dialogRef.current) {
          dialogRef.current.showModal();
        }
      }, [dialogRef]);

    return (
        <dialog ref={dialogRef} className="modal light-background-text dark-background-text">
            <div className="modal-close">
                <button className="button-style" onClick={closeDialog}>Close X</button>
            </div>
            <img src={ProjectInfo.image} alt={ProjectInfo.alt} />
            <h2>{ProjectInfo.title}</h2>
            <p>{ProjectInfo.description}</p>
            <h3 className="modal-tools-title">Built With:</h3>
            <div className="modal-tools">
                {ProjectInfo.tools.map(tool => (
                    <p key={tool}>{tool}</p>
                ))}
            </div>
            <div className="modal-links">
                {ProjectInfo.link && (
                    <a className="button-style" href={ProjectInfo.link}>Visit this Site</a>
                )}
                {ProjectInfo.github && (
                    <a className="button-style" href={ProjectInfo.github}>See Github</a>
                )}
            </div>
        </dialog>
    )
}