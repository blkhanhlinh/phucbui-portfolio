import React from "react";
import Introduction from "../../containers/about/introduction";
import Quote from "../../containers/about/quote";
import Expertise from "../../containers/about/expertise";
import Information from "../../containers/about/information";

function AboutPage() {
    return (
        <>
            <Introduction />
            <Quote />
            <Expertise />
            <Information />
        </>
    );
}

export default AboutPage;