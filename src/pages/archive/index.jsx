import { useRouter } from "next/router";
import React from "react";
import Projects from "../../containers/archive/projects";
import PersonalWorks from "../../containers/archive/personal-works";

const ArchivePage = () => {
    return (
        <>
            <Projects />
            <PersonalWorks />
        </>
    );
}

export default ArchivePage;