import { useRouter } from "next/router";
import React from "react";
import Projects from "../../containers/archive/projects";
import PersonalWorks from "../../containers/archive/personal-works";
import { SmoothScrollProvider } from "../../contexts/SmoothScroll";

const ArchivePage = () => {
    return (
        <SmoothScrollProvider options={{smooth: true}}>
            {/*<Projects />
            <PersonalWorks />*/}
        </SmoothScrollProvider>
    );
}

export default ArchivePage;