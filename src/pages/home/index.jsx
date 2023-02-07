import React from "react";
import Introduction from "../../containers/home/introduction";
import Works from "../../containers/home/works";
import Contact from "../../containers/home/contact";

function HomePage () {
    return (
        <>
            <Introduction />
            <Works />
            <Contact />
        </>
    );
};

export default HomePage;