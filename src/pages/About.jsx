import React from 'react'
import Hero2 from '../images/Hero-2.png'

function PagesAbout() {
  return (
    <div id="about" className="row flex-lg-row align-items-center g-5 py-4 container">
      <div className="col-12 col-lg-6">
        <img
          src={Hero2}
          width="600"
          className="d-block mx-lg-auto img-fluid"
          loading="lazy"
          alt="Hero-2"
        />
      </div>
      <div className="col-12 col-lg-6">
        <h1 className="display-5 fw-bold mb-3">Our story</h1>
        <br />
        <br />
        <p className="lead text-success">In 2010, Foodya’s founder and accountant John Doe had the idea of starting a food delivery app after seeing the lack of delivery options while working late nights in his Hong Kong office. He worked as Foodya’s first delivery rider, delivering food every day for the first year in order to understand the customer experience.</p>
        <br />
        <br />
        <p className="lead text-success">Foodya operated in Hong Kong for the first three years, growing via word of mouth. In 2016, the company branched out to London, Munich and Barcelona. And as of July 2022, Foodya had operated in 12 countries and over 100 cities.</p>
      </div>
    </div>
  )
}

export default PagesAbout
