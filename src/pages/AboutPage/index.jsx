import React from "react";
import AboutSlider from "../../components/CertificateSlider";

import "./about.css";
import AboutComponent from "../../components/AboutComponent";
import img1 from "../../assets/img/about/img1.png";
import video1 from "../../assets/img/about/video1.mp4";
import PageLinks from "../../components/PageLinks";

const About = () => {
  return (
    <div className="container">
      <PageLinks home="Home" about="Haqqımızda" />

      <div className="page__header">
        <h2>Haqqımızda</h2>
      </div>
      <AboutComponent
        tittle="
      İlk fəaliyyətimizə 2005-ci ildə qeydiyyatdan keçmiş AZELM və Caspian Energy Construction şirkətləri çərçivəsində öz mühəndis potensialımızdan istifadə etməklə kiçik su elektrik stansiyaları, külək turbinləri, günəş kollektorları və akkumulyatorların quraşdırılması xidmətləri ilə başlamışıq. Bu müddətdə daxili bazardan tədarük edirdik, sonradan tikintinin həcmi artdıqca özümüz respublikaya idxal etməyə başladıq. Tədricən müəssisəmiz nəinki enerji layihələrini həyata keçirən, həm də daxili bazara tikinti materialları idxal edən böyük bir şirkətə çevrildi. Tikinti materiallarının əsas idxalçısı olaraq biz əsas diqqətimiz kimi istilik izolyasiya məhsullarını seçmişik.

      Hazırda şirkətin paytaxtda və regionlarda istilik izolyasiya materiallarının satışı üzrə 500-dən çox topdansatış mərkəzlərindən ibarət diler şəbəkəsi mövcuddur.
      Eyni zamanda, müəssisəmiz respublikamızın onlarla iri tikinti təşkilatını istilik izolyasiya materialları ilə təmin edir və onların bu sahədə müxtəlif texniki, elmi və mühəndislik sifarişlərini yerinə yetirir.
Caspian Energy Group - Respublikamızın tikinti sənayesinin tələblərinə uyğun olaraq Rusiya, Ukrayna, Türkiyə, Almaniya, Fransa və İtaliyada dünya şöhrətli şirkətlərin istehsal etdiyi istilik izolyasiya materiallarını idxal edərək daxili bazara çıxarır. Məhsullarımızın qiymətinə, çeşidinə və keyfiyyətinə görə bazarda lider mövqe tuturuq. Şirkətimiz istilik izolyasiyası və tikinti materialları sahəsində etibarlı tərəfdaşınız ola bilər. Bu istiqamətdə təcrübəli komandamız hər zaman inamla hər cür səy göstərməyə hazırdır. Sizi şirkətimizlə əməkdaşlığa dəvət edirik.
      "
        aboutImg1={img1}
        aboutVideo1={
          <video controls>
            <source src={video1} type="video/mp4" />
            Tarayıcınız video etiketini desteklemiyor.
          </video>
        }
      />

      <div className="page__header">
        <h2>Sertifikatlar</h2>
      </div>

      <div className="about__slider__box">
      <AboutSlider />
      </div>
    </div>
  );
};

export default About;
