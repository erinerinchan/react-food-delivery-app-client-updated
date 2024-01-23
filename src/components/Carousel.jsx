import React from 'react'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

import american from '@/images/american.jpeg'
import chinese from '@/images/chinese.jpeg'
import healthy from '@/images/healthy.jpeg'
import indian from '@/images/indian.jpeg'
import italian from '@/images/italian.jpeg'
import japanese from '@/images/japanese.jpeg'
import korean from '@/images/korean.webp'
import thai from '@/images/thai.jpeg'
import vietnamese from '@/images/vietnamese.jpeg'

function Carousel() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div id="carousel" className="container">
      <Slider {...settings}>
        <div className="p-2">
          <div className="card">
            <Link to="/restaurants?filter=Chinese" className="link">
              <div style={{ paddingTop: '75%', background: `url(${chinese})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0 0' }} />
              <div className="text-center py-2">Chinese</div>
            </Link>
          </div>
        </div>
        <div className="p-2">
          <div className="card">
            <Link to="/restaurants?filter=Italian" className="link">
              <div style={{ paddingTop: '75%', background: `url(${italian})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0 0' }} />
              <div className="text-center py-2">Italian</div>
            </Link>
          </div>
        </div>
        <div className="p-2">
          <div className="card">
            <Link to="/restaurants?filter=Japanese" className="link">
              <div style={{ paddingTop: '75%', background: `url(${japanese})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0 0' }} />
              <div className="text-center py-2">Japanese</div>
            </Link>
          </div>
        </div>
        <div className="p-2">
          <div className="card">
            <Link to="/restaurants?filter=America" className="link">
              <div style={{ paddingTop: '75%', background: `url(${american})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0 0' }} />
              <div className="text-center py-2">American</div>
            </Link>
          </div>
        </div>
        <div className="p-2">
          <div className="card">
            <Link to="/restaurants?filter=Healthy" className="link">
              <div style={{ paddingTop: '75%', background: `url(${healthy})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0 0' }} />
              <div className="text-center py-2">Healthy</div>
            </Link>
          </div>
        </div>
        <div className="p-2">
          <div className="card">
            <Link to="/restaurants?filter=Indian<" className="link">
              <div style={{ paddingTop: '75%', background: `url(${indian})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0 0' }} />
              <div className="text-center py-2">Indian</div>
            </Link>
          </div>
        </div>
        <div className="p-2">
          <div className="card">
            <Link to="/restaurants?filter=Korean<" className="link">
              <div style={{ paddingTop: '75%', background: `url(${korean})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0 0' }} />
              <div className="text-center py-2">Korean</div>
            </Link>
          </div>
        </div>
        <div className="p-2">
          <div className="card">
            <Link to="/restaurants?filter=Thai</d" className="link">
              <div style={{ paddingTop: '75%', background: `url(${thai})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0 0' }} />
              <div className="text-center py-2">Thai</div>
            </Link>
          </div>
        </div>
        <div className="p-2">
          <div className="card">
            <Link to="/restaurants?filter=Vietnam" className="link">
              <div style={{ paddingTop: '75%', background: `url(${vietnamese})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '8px 8px 0 0' }} />
              <div className="text-center py-2">Vietnamese</div>
            </Link>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Carousel
