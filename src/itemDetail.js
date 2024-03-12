import React from 'react';
import Footer from './Footer';
import './itemDetails.css';

function ItemDetail({ item }) {
    const splitIndex = 1350;
    const firstPart = item.itemContent.substring(0, splitIndex);
    const secondPart = item.itemContent.substring(splitIndex);

    const firstPartSplitted = firstPart.split('\n').map((section, index) => (
        <React.Fragment key={index}>
            {section}<br />
        </React.Fragment>
    ));
    const secondPartSplitted = secondPart.split('\n').map((section, index) => (
        <React.Fragment key={index}>
            {section}<br />
        </React.Fragment>
    ));

    const renderImages = () => {
        const images = item.itemImage || {};
        return Object.values(images).map((url, index) => (
        <img className={`Image`} key={index} src={url} alt={`Content ${index + 1}`} />
        ));
    };

    return (
        <div className='itemPage'>
            <div className='itemPageHeader'>
                <h1 className='itemPageTitle'><a href="/">Zumat</a><br></br>{item.title}</h1>
                <p className='itemPageDate'>{item.itemDate}</p>
            </div>
            <div className='itemPageBody'>
                <p className='itemPageContent'>{firstPartSplitted}</p>
                <div className='itemPageContent'>
                    <p>{secondPartSplitted}</p>
                    <a href={item.itemLink}>Link +</a>
                </div>
            </div>
            <div className='itemPageImageContainer'>{renderImages()}</div>
            <Footer />
        </div>
    );
}

export default ItemDetail;