import React from 'react';
import Footer from '../Footer';
import '../itemDetails.css';

function Homepage() {
    let aboutDescription = "I am a Swiss-based artist and designer. I am interested in the intersection of art, design, and technology. I am currently studying at the Zurich University of the Arts. I am passionate about creating digital experiences that are both visually appealing and user-friendly. I am always looking for new opportunities to collaborate with other creatives and expand my skill set. Feel free to reach out to me if you would like to work together! I am a Swiss-based artist and designer. I am interested in the intersection of art, design, and technology. I am currently studying at the Zurich University of the Arts. I am passionate about creating digital experiences that are both visually appealing and user-friendly. I am always looking for new opportunities to collaborate with other creatives and expand my skill set. Feel free to reach out to me if you would like to work together!";
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
        <div className='itemPage'>
            <div className='itemPageHeader'>
                <h1 className='itemPageTitle'><a href="/">Zumat</a><br></br>About me</h1>
            </div>
            <div className='itemPageBody'>
                <p className='itemPageContent'>{firstPartSplitted}</p>
                <div className='itemPageContent'>
                    <p>{secondPartSplitted}</p>
                    <a href="https://www.linkedin.com/in/zumat/" target="_blank">Linkedin +</a><br></br>
                    <a href="https://www.instagram.com/zumat.ch" target="_blank">Instagram +</a>
                </div>
            </div>
            <div className='itemPageImageContainer'>
                <img className={`Image`} src="../MatteoSubet_Photo.png"/>
            </div>
            <Footer />
        </div>
    );
}

export default Homepage;