import React from 'react'

function Footer() {
  return (
    <div id="footer" className="py-5 px-4 mb-3 justify-content-center text-white">
      <div className="d-flex flex-wrap">
        <div className="box px-5">
          <h3 className="mb-3 py-4 text-left">Discover Foodya</h3>
          <div className="text-left">
            <p>Investors</p>
            <p>About Us</p>
            <p>Takeaway</p>
            <p>More</p>
            <p>Newsroom</p>
            <p>Engineering blog</p>
            <p>Design blog</p>
            <p>Careers</p>
            <p>Restaurants signup</p>
          </div>
        </div>
        <div className="box px-5">
          <h3 className="mb-3 py-4 text-left">Legal</h3>
          <div className="text-left">
            <p>Terms and conditions</p>
            <p>Privacy</p>
            <p>Cookies</p>
          </div>
        </div>
        <div className="box px-5">
          <h3 className="mb-3 py-4 text-left">Help</h3>
          <div className="text-left">
            <p>Contact</p>
            <p>FAQs</p>
            <p>Cuisines</p>
          </div>
        </div>
        <div className="box px-5">
          <h3 className="mb-3 px-4 py-4 text-left">Take Foodya with you</h3>
          <br />
          <img src="https://consumer-component-library.roocdn.com/26.7.4/static/images/app-store-badges-en.svg" width="250px" height="40px" alt="app" />
        </div>
      </div>
    </div>
  )
}

export default Footer
