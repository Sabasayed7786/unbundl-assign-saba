import React from 'react'
import image from "../../assets/body-item/3.JPG"
import "./Section1.css"


const Section1 = () => {
  return (
    <div className="section1-container">
    <div className="section1-text" style={{ backgroundColor: '#fff9e5' }}>

<p>PLANT PROTEIN POWDER</p>
<p className="p-tag">Perfectly Balanced Amino Acids</p>
<p>Our 100% plant based powder is formulated to fuel your body with pure protein. By blending naturally sourced yellow peas with whole grain rice, this formula provides a complete essential amino acid profile.</p>
<button class="read-more-button">READ MORE     

</button>


    </div>
    <div className="section1-image">
    <img src={image} alt="Image Alt Text 1" />

    </div>
    </div>
  )
}

export default Section1