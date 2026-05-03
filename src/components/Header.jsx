/* import FrontPic from "/assets/2021-2023/5395454667787451018_121.jpg"; */
import FrontPic from "/assets/2021-2023/pavel_sevostianov.jpg";

export default function Header() {

  return (

    <div id="header-container">
      <h1>ПАВЕЛ ЛЕОНИДОВИЧ СЕВОСТЬЯНОВ</h1>
      <h3>23/02/1972 - 05/05/2023</h3>
      <h2>МЕМОРИАЛ</h2>
      <div id="hero-img">
        <img src={FrontPic} alt="Павел Леонидович Севостьянов"/>
      </div>
    </div>

  );

}

