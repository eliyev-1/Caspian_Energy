
import PageLinks from '../../components/PageLinks'
import "./newsPage.css"
import NewsCards from '../../components/NewsCards'
import  { useState } from 'react';


const NewsPage = () => {


  let [newsCheckbox, setNewsCheckbox] = useState(false);
let [exhibitionCheckbox, setExhibitionCheckbox] = useState(false);
let [galleryCheckbox, setGalleryCheckbox] = useState(false);
const handleCheckboxChange = (checkboxNumber) => {
  setNewsCheckbox(false);
  setExhibitionCheckbox(false);
  setGalleryCheckbox(false);

  switch (checkboxNumber) {
    case 1:
    setNewsCheckbox(true);
    break;
    case 2:
    setExhibitionCheckbox(true);
    break;
    case 3:
    setGalleryCheckbox(true);
    break;
    default:
    break;
    }

}


  return (
    <>
     <PageLinks home="Home" about="Yenilikler" />
     <div className="page__header">
      <h2>Yeniliklər</h2>
     </div>

     <div className="news">

      <div>
      <input type="checkbox" id='newsCheckbox'
      
       checked={newsCheckbox}
        onChange={() => handleCheckboxChange(1)}
      
      />
        <label htmlFor="newsCheckbox">Yeniliklər</label>
        
      </div>
      <div>
      <input type="checkbox" id='exhibitionCheckbox'
        checked={exhibitionCheckbox}
        onChange={() => handleCheckboxChange(2)}
      />
        <label htmlFor="exhibitionCheckbox">Sərgilər</label>
        
      </div>
      <div>
      <input type="checkbox" id='galleryCheckbox'
       checked={galleryCheckbox}
       onChange={() => handleCheckboxChange(3)} />
        <label htmlFor="galleryCheckbox">Gallery</label>
        
      </div>

     </div>

     <div className="news__cards__section">
     {newsCheckbox && <NewsCards newsType="yenilikler" />}
        {exhibitionCheckbox && <NewsCards newsType="sergiler" />}
        {galleryCheckbox && <NewsCards newsType="qalereya" />}
     </div>
     



    </>
  )
}

export default NewsPage