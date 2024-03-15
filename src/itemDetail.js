import React from 'react';
import Footer from './Footer';
import './itemDetails.css';

function slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

function ItemDetail({ item }) {
    const splitIndex = item.itemContent.lastIndexOf(' ', 1350);
    const firstPart = item.itemContent.substring(0, splitIndex);
    const secondPart = item.itemContent.substring(splitIndex);

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
                <p className='itemPageDate'>{item.itemDate.substring(0, 4)}</p>
            </div>
            <div className='itemPageBody'>
                <p className='itemPageContent'>{firstPartSplitted}</p>
                <div className='itemPageContent'>
                    <p>{secondPartSplitted}</p>
                    <a href={item.itemLink} target="_blank">Link +</a>
                </div>
            </div>
            <div className='itemPageImageContainer'>{renderImages()}</div>
            <div className='itemPageCite'>
                <p>How to cite this reference:<br></br>Subet, Matteo ({item.itemDate.substring(0, 4)}). {item.title}. zumat.ch/#/{slugify(item.title)}</p>
            </div>
            <Footer />
        </div>
    );
}

export default ItemDetail;