import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Intro from "./Intro";
import TechStack from "./TechStack";
import Education from "./Education";
import Contact from "./Contact";


function Home() {
    return(

        <>
            <ResponsiveAppBar/>
            <Intro/>
            <TechStack/>
            <Contact/>
        </>
    );
}

export default Home;