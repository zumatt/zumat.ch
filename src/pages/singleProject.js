import React from 'react';
import Footer from '../components/Footer.js';
import './singleProject.css';
import { CreateHead } from '../components/HeadHelper.js';
import '../index.css';

function slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

function ItemDetail({ item }) {
    let splitIndex = item.itemContent.lastIndexOf(' ', 0);
    console.log(window.innerWidth);
    if (window.innerWidth > 820) {
    const characterCount = item.itemContent.length;
    const rowCount = characterCount / 72;
    splitIndex = item.itemContent.lastIndexOf(' ', (72*(rowCount/2+3)));
    } else {
        splitIndex = item.itemContent.length;
    }
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

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth()); //January is 0!
    var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    return (
        <div>
            <CreateHead
                title={`${item.title} | Zumat Interaction Designer`}
                description={item.itemSEODescription}
                image={item.itemImage[0]}
                url={`https://zumat.ch/${slugify(item.title)}`}
                type="article"
            />
        
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
                    <p>How to cite this reference:<br></br>Subet, Matteo ({item.itemDate.substring(0, 4)}). {item.title}. Retrieved on {dd} {months[mm]} {yyyy} <a href={`https://zumat.ch/${slugify(item.title)}`}>zumat.ch/{slugify(item.title)}</a></p>
                </div>
                <Footer />
            </div>
        </div>
    );
}



export default ItemDetail;