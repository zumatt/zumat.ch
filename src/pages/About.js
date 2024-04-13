import React from 'react';
import Footer from '../components/Footer.js';
import './singleProject.css';
import { CreateHead } from '../components/HeadHelper.js';

function Homepage() {
    let aboutDescription = "Matteo Subet is a teaching and research assistant at the SUPSI Institute of Design and the Master of Arts program in Interaction Design. His work is deeply rooted in the intersections of design education, theory, and practice. Matteo's primary research interests lie in the field of human-computer interaction, with a particular focus on exploring the dynamic relationship between users and emerging technologies. This includes investigating the integration of physical processes with computational systems, often referred to as physical computing. Furthermore, Matteo is passionate about the application of artificial intelligence (AI) in educational contexts. He explores how AI-driven systems can enhance learning experiences and instructional practices, seeking to develop innovative solutions that are both practical and transformative. Through his multifaceted research and contributions, Matteo aims to push the boundaries of how technology interfaces with education and design, driving forward advancements that have the potential to significantly impact these fields.";
    let splitIndex = aboutDescription.lastIndexOf(' ', 0);
    console.log(window.innerWidth);
    if (window.innerWidth > 820) {
    const characterCount = aboutDescription.length;
    const rowCount = characterCount / 72;
    splitIndex = aboutDescription.lastIndexOf(' ', (72*(rowCount/2+3)));
    } else {
        splitIndex = aboutDescription.length;
    }
    const firstPart = aboutDescription.substring(0, splitIndex);
    const secondPart = aboutDescription.substring(splitIndex);

    const firstPartSplitted = firstPart.split('\n').map((section, index) => (
        <React.Fragment key={index}>
            {section}
        </React.Fragment>
    ));
    const secondPartSplitted = secondPart.split('\n').map((section, index) => (
        <React.Fragment key={index}>
            {section}
        </React.Fragment>
    ));

    return (
        <div>
            <CreateHead
                    title="About me"
                    description="Zumat also known as Matteo Subet is an Interaction Designer based in Switerland. His research interests are human-computer interaction with a focus on new technologies and physical computing, and AI-driven systems in the educational practices."
                    image="https://beta.zumat.ch/zumat_interaction-designer_matteo-subet.png"
                    url="https://zumat.ch/about"
                    type="website"
            />
            <div className='itemPage'>
                <div className='itemPageHeader'>
                    <h1 className='itemPageTitle'><a href="/">Zumat</a><br></br>About me</h1>
                </div>
                <div className='itemPageBody'>
                    <p className='itemPageContent'>{firstPartSplitted}</p>
                    <div className='itemPageContent'>
                        <p>{secondPartSplitted}</p>
                        <a href="https://orcid.org/0009-0003-4769-9568" target="_blank">Orcid +</a><br></br>
                        <a href="https://www.researchgate.net/profile/Matteo-Subet" target="_blank">ResearchGate +</a><br></br>
                        <a href="https://www.linkedin.com/in/zumat/" target="_blank">Linkedin +</a><br></br>
                        <a href="https://www.instagram.com/zumat.ch" target="_blank">Instagram +</a>
                    </div>
                </div>
                <div className='itemPageImageContainer'>
                    <img className={`Image`} src="../MatteoSubet_Photo.png"/>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default Homepage;