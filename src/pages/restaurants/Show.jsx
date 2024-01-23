import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CompsBreadcrumbs from '@/components/Breadcrumbs'
import Loading from '@/components/Loading'
import Error from '@/components/Error'
import { BsStarFill } from 'react-icons/bs'
import ProductCategory from '@/components/restaurants/ProductCategory'
import { API_ENDPOINT } from '@/config'

function PagesRestaurantsShow() {
  const { id } = useParams()
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${API_ENDPOINT}/api/restaurants/${id}`
    }).then((resp) => {
      setData(resp.data)
    }).catch((err) => {
      setError(err.response.data)
    }).finally(() => {
      setLoading(false)
    })
  }, [])

  const handleTabClick = (targetID) => {
    const root = document.getElementById('root')
    const elemTop = document.getElementById(targetID)?.offsetTop || 0

    root.scroll({
      top: elemTop,
      behavior: 'smooth'
    })
  }

  if (loading) return <Loading />
  if (error) return <Error message={error.message} />

  return (
    <div id="pages-restaurants-show">
      <div id="information" className="container mb-3">
        <CompsBreadcrumbs
          items={['Home', 'Restaurants', data.name]}
        />

        <div id="header" className="row">
          <div className="col-12 col-md-4">
            <img className="img-fluid" src={data.image} alt="img" />
          </div>

          <div className="col-12 col-md-8">
            <h2>{data.name}</h2>
            <div className="badge-container">
              {
                data.categories.map((cat) => <span key={cat._id} className="badge text-bg-light">{cat.name}</span>)
              }
            </div>

            <div className="star-container">
              {
                Array(Math.ceil(data.ratings)).fill(null).map((_, i) => <BsStarFill key={i} className="star" />)
              }
            </div>
            <p className="opening-time py-1">Opens at {data.opening_time}</p>
          </div>
        </div>
      </div>

      <div id="tabs" className="bg-white py-4 mb-3">
        <div className="container d-flex flex-nowrap">
          {
            data.foods.map((food) => (
              <div
                key={food._id}
                className="item pointer px-2"
                onClick={() => handleTabClick(food._id)}
              >{food.name}</div>
            ))
          }
        </div>
      </div>

      <div id="food" className="bg-light pt-4 pb-5">
        <div className="container d-flex flex-nowrap">
          {
            data.foods.map((food) => (
              <ProductCategory key={food._id} food={food} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PagesRestaurantsShow
