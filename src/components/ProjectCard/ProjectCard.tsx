import "./ProjectCard.css";
import { useState } from "react";
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
            <div className="flip-card link-underline">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={ProjectInfo.image} alt="" />
                    </div>
                    <div className="flip-card-back">
                        <h2>{ProjectInfo.title}</h2>
                        <div className="flip-card-back-inner">
                            <div>
                                <button className="">See More Details</button>
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
        </>
    )
}
