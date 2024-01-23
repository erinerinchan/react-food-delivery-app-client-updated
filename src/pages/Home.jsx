import React from 'react'
import { Link } from 'react-router-dom'
import chicken from '@/images/hotpicks-goobne-chicken.jpeg'
import sushi from '@/images/hotpicks-itasho-sushi.jpeg'
import mixian from '@/images/hotpicks-mixian.jpg'
import burger from '@/images/hotpicks-mos-burger.jpeg'
import vietnamese from '@/images/hotpicks-nha-trang.jpeg'
import pizza from '@/images/hotpicks-pizza-express.jpeg'
import shanghai from '@/images/hotpicks-shanghai-lao-lao.jpeg'
import tea from '@/images/hotpicks-tenren-tea.jpeg'
import chinese from '@/images/hotpicks-Tsui-Wah.jpeg'
import Card from 'react-bootstrap/Card'
import Hero2 from '../images/Hero-2.png'
import Mobile from '../images/mobile-app.png'
import Carousel from '../components/Carousel'
import { works } from '../utils/constants'

function PagesHome() {
  return (
    <>
      {/* Hero */}
      <div id="hero" className="row flex-lg-row-reverse align-items-center g-5 py-4 container">
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
          <h1 className="display-5 fw-bold mb-3">Food coming at ya!</h1>
          <p className="lead text-black">Your favourite restaurants and takeaways, <br />delivered to your door!</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start pointer">
            <Link to="/restaurants" className="btn btn-lg px-4 me-md-2">
              Find food
            </Link>
          </div>
        </div>
      </div>
      {/* Carousel */}
      <div id="carousel" className="py-4 px-5 mb-3">
        <h2 className="fw-bold mb-3 px-4 py-4">&nbsp;</h2>
        <Carousel />
      </div>
      {/* Hot picks */}
      <div id="hot-picks" className="py-4 px-4 mb-3">
        <h2 className="fw-bold mb-3 px-4 py-4">Hot picks</h2>
        <div className="row">
          <div className="col-6 col-md-4 px-5">
            <div style={{ paddingTop: '75%', background: `url(${chicken})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 8px 8px' }} />
            <p className="text-center py-2">Goobne Chicken</p>
          </div>
          <div className="col-6 col-md-4 px-5">
            <div style={{ paddingTop: '75%', background: `url(${burger})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 8px 8px' }} />
            <p className="text-center py-2">MOS Burger</p>
          </div>
          <div className="col-6 col-md-4 px-5">
            <div style={{ paddingTop: '75%', background: `url(${mixian})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 8px 8px' }} />
            <p className="text-center py-2">Mixian Sense</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-4 px-5">
            <div style={{ paddingTop: '75%', background: `url(${pizza})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 8px 8px' }} />
            <p className="text-center py-2">PizzaExpress</p>
          </div>
          <div className="col-6 col-md-4 px-5">
            <div style={{ paddingTop: '75%', background: `url(${shanghai})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 8px 8px' }} />
            <p className="text-center py-2">Shanghai Lao Lao</p>
          </div>
          <div className="col-6 col-md-4 px-5">
            <div style={{ paddingTop: '75%', background: `url(${sushi})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 8px 8px' }} />
            <p className="text-center py-2">Itacho Sushi</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-4 px-5">
            <div style={{ paddingTop: '75%', background: `url(${chinese})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 8px 8px' }} />
            <p className="text-center py-2">Tsui Wah Restaurant</p>
          </div>
          <div className="col-6 col-md-4 px-5">
            <div style={{ paddingTop: '75%', background: `url(${tea})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 8px 8px' }} />
            <p className="text-center py-2">Tenren&apos;s tea</p>
          </div>
          <div className="col-6 col-md-4 px-5">
            <div style={{ paddingTop: '75%', background: `url(${vietnamese})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 8px 8px' }} />
            <p className="text-center py-2">Nha Trang</p>
          </div>
        </div>
      </div>
      {/* Options */}
      <div id="options" className="py-4 px-5 mb-3">
        <h2 className="fw-bold mb-3 px-4 py-4">Need some more options?</h2>
        <div className="container d-flex flex-wrap">
          <Link to="/restaurants?filter=Vegetarian" className="link">
            <p className="d-flex py-2 px-3 pointer">vegetarian</p>
          </Link>
          <Link to="/restaurants?filter=Mexican" className="link">
            <p className="d-flex py-2 px-3 pointer">mexican</p>
          </Link>
          <Link to="/restaurants?filter=Lebanese" className="link">
            <p className="d-flex py-2 px-3 pointer">lebanese</p>
          </Link>
          <Link to="/restaurants?filter=Greek" className="link">
            <p className="d-flex py-2 px-3 pointer">greek</p>
          </Link>
          <Link to="/restaurants?filter=Halal" className="link">
            <p className="d-flex py-2 px-3 pointer">halal</p>
          </Link>
          <Link to="/restaurants?filter=American" className="link">
            <p className="d-flex py-2 px-3 pointer">american</p>
          </Link>
        </div>
      </div>
      {/* Kitchen */}
      <div id="app" className="py-4 px-5 mb-3">
        <h2 className="fw-bold mb-3 px-4 py-4">Fresh from the kitchen</h2>
        <div className="d-flex justify-content-center">
          <img src={Mobile} width="1000px" height="210px" alt="mobile" />
        </div>
      </div>
      {/* Work with Foodya */}
      <div id="work" className="py-4 px-5 mb-3">
        <h2 className="fw-bold mb-3 px-4 py-4">Work with Foodya</h2>
        <div className="d-flex justify-content-center flex-wrap">
          {
            works.map((work) => {
              const { id, image, title, text } = work
              return (
                <div key={id} className="mx-4">
                  <Card style={{ width: '360px', height: '530px' }}>
                    <Card.Img variant="top" src={image} style={{ height: '260px' }} />
                    <Card.Body className="bg-secondary text-white">
                      <Card.Title className="title">{title}</Card.Title>
                      <Card.Text className="text">{text}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              )
            })
          }
        </div>
      </div>
      {/* Newsletter */}
      <div id="newsletter" className="d-flex justify-content-center py-4 px-5 mb-3 flex-wrap">
        <div className="px-5 py-4">
          <h2 className="fw-bold mb-3 px-4">Join our newsletter</h2>
          <h4>Check out our daily selections of wallet-friendly eats.</h4>
        </div>
        <div className="px-5 py-4 align-self-center">
          <form
            className="contact-form"
            action="https://formspree.io/f/xqkjzkja"
            method="POST"
          >
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
              name="_replyto"
            />
            <button type="submit" className="submit-btn">Subscribe</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PagesHome
