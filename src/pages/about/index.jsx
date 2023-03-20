import React from "react";
import Introduction from "../../containers/about/introduction";
import Quote from "../../containers/about/quote";
import Expertise from "../../containers/about/expertise";
import Information from "../../containers/about/information";
import { SmoothScrollProvider } from "../../contexts/SmoothScroll";

function AboutPage() {
    return (
        <SmoothScrollProvider options={{smooth: true}}>
            <Introduction />
            <Quote />
            <Expertise />
            <Information />
        </SmoothScrollProvider>
    );
}

export default AboutPage;