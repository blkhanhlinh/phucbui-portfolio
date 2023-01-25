import React from "react";
import { useState, useEffect } from "react";
import Introduction from "../../containers/home/introduction";
import Works from "../../containers/home/works";
import Contact from "../../containers/home/contact";
import ViewArchive from "../../components/view-archive";

function HomePage () {
    const [projectSlider, setprojectSlider] = useState([]);
    return (
        <>
            <Introduction />
            <Works />
            <Contact />
            <ViewArchive />
        </>
    );
};

export default HomePage;