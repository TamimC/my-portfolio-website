import React from "react";
import Slider from "react-slick";
import CustomGliderItem from "./customGliderItem";
import HTMLicon from './../../images/experienceSymbols/html5Symbol.png';
import CSSicon from './../../images/experienceSymbols/CSS3Symbol.png';
import JSicon from './../../images/experienceSymbols/JSSymbol.png';
import Javaicon from './../../images/experienceSymbols/java.png';
import CIcon from './../../images/experienceSymbols/CIcon.png';
import PIcon from './../../images/experienceSymbols/pythonIcon.png';
import EIcon from './../../images/experienceSymbols/eiffel.png';
import SQLICon from './../../images/experienceSymbols/mySQLIcon.png';
import PostGreIcon from './../../images/experienceSymbols/database-postgre-sql.png';
import MongoIcon from './../../images/experienceSymbols/mongoIcon.png';
import ExcelIcon from './../../images/experienceSymbols/ExcelIcon.png';
import ReactIcon from './../../images/experienceSymbols/ReactIcon.png';
import SpringIcon from './../../images/experienceSymbols/SpringIcon.png';



class CustomGlider extends React.Component {

  render() {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1
    };

    return (
      <Slider  {...settings} className = "fit-well">
        <div>
          <CustomGliderItem  image = {HTMLicon} description = 'HTML 5'/>
        </div>
        <div>
          <CustomGliderItem  image = {CSSicon} description = 'CSS'/>
        </div>
        <div>
          <CustomGliderItem  image = {JSicon} description = 'JavaScript'/>
        </div>
        <div>
          <CustomGliderItem  image = {Javaicon} description = 'Java'/>
        </div>
        <div>
          <CustomGliderItem  image = {CIcon} description = 'C'/>
        </div>
        <div>
          <CustomGliderItem  image = {PIcon} description = 'Python'/>
        </div>
        <div>
          <CustomGliderItem  image = {EIcon} description = 'Eiffel'/>
        </div>
        <div>
          <CustomGliderItem  image = {SQLICon} description = 'MySQL'/>
        </div>
        <div>
          <CustomGliderItem  image = {PostGreIcon} description = 'Postgres SQL'/>
        </div>
        <div>
          <CustomGliderItem  image = {MongoIcon} description = 'MongoDB'/>
        </div>
        <div>
          <CustomGliderItem  image = {ExcelIcon} description = 'Microsoft Excel'/>
        </div>
        <div>
          <CustomGliderItem  image = {SpringIcon} description = 'Spring'/>
        </div>
        <div>
          <CustomGliderItem  image = {ReactIcon} description = 'ReactJS'/>
        </div>
      </Slider>
    );
  }
}

export default CustomGlider;