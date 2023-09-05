import React from 'react'
import image from "../../assets/body-item/5.JPG"
import "./Section1.css"


const Section5 = () => {
  return (
    <div className="section1-container" >
    <div className="section1-text">

<p>HEALTH COACHES</p>
<p className="p-tag">Meet Our Experts</p>
<p>Searching for an expert within nutrition, fitness or mental health? Look no further. Our best in class experts are just one click away and ready to support you from the comfort of your home.</p>
<button class="read-more-button">READ MORE     

</button>


    </div>
    <div className="section1-image">
    <img src={image} alt="Image Alt Text 1" />

    </div>
    </div>
  )
}

export default Section5