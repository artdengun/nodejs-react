import React from 'react';
import Contact from './Contact';
import Experience from './Experience';
import MyBlog from './MyBlog';
import NavigateBar from './NavigateBar';
import NavigationFooter from './NavigationFooter';
import ProjectsPage from './ProjectsPage';
import Sertifikat from './Sertifikat';









function Portofolio() {
    return (
        <div>
            <NavigateBar />
            <hr className="my-5 px- pb-5" />
            <ProjectsPage />
            <hr className="my-5 px- pb-5" />
            <Sertifikat />
            <hr className="my-5 px- pb-5" />
            <Experience />
            <hr className="my-5 px- pb-5" />
            <MyBlog />
            <hr className="my-5 px- pb-5" />
            <Contact />
            <hr className="my-5 px- pb-5" />
            <NavigationFooter />
        </div>
    );
}

export default Portofolio;
