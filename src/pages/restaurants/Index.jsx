import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useSearchParams, Link } from 'react-router-dom'
import CompsBreadcrumbs from '@/components/Breadcrumbs'
import Loading from '@/components/Loading'
import Error from '@/components/Error'
import { BsStarFill, BsFillGridFill, BsList } from 'react-icons/bs'
import { API_ENDPOINT } from '@/config'

const useQuery = () => {
  const [search, setSearch] = useSearchParams()
  const query = Object.fromEntries(search)

  return [query, setSearch]
}

function PagesRestaurantsIndex() {
  const [query] = useQuery()
  const [mode, setMode] = useState('list')
  const [restaurantError, setRestaurantError] = useState(null)
  const [restaurants, setRestaurants] = useState(null)
  const [restaurantsLoading, setRestaurantsLoading] = useState(true)
  const [filterable, setFilterable] = useState(null)
  const [filterableLoading, setFilterableLoading] = useState(true)
  const [selectedFilter, setSelectedFilter] = useState('')

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${API_ENDPOINT}/api/restaurants`
    }).then((resp) => {
      setRestaurants(resp.data)
    }).catch((err) => {
      setRestaurantError(err?.response?.message || err)
    }).finally(() => {
      setRestaurantsLoading(false)
    })

    axios({
      method: 'GET',
      url: `${API_ENDPOINT}/api/filterable`
    }).then((resp) => {
      setFilterable(resp.data)
      const dietaryID = resp.data?.dietaries?.find((filter) => filter?.name?.toLowerCase() === query?.filter?.toLowerCase())?._id
      const categoryID = resp.data?.categories?.find((filter) => filter?.name?.toLowerCase() === query?.filter?.toLowerCase())?._id
      if (dietaryID || categoryID) setSelectedFilter(dietaryID || categoryID)
    }).finally(() => {
      setFilterableLoading(false)
    })
  }, [])

  useEffect(() => {
    if (selectedFilter) {
      axios({
        method: 'GET',
        url: `${API_ENDPOINT}/api/restaurants?filter=${selectedFilter}`
      }).then((resp) => {
        setRestaurants(resp.data)
      }).catch((err) => {
        setRestaurantError(err?.response?.message || err)
      }).finally(() => {
        setRestaurantsLoading(false)
      })
    }
  }, [selectedFilter])

  if (restaurantsLoading || filterableLoading) return <Loading />
  if (restaurantError) return <Error message={restaurantError.message} />

  const renderList = () => {
    if (mode !== 'list') return null

    return (
      <div id="list" className="row row-cols-1 row-cols-md-2 g-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className="col">
            <div className="card">
              <div className="row g-0">
                <Link className="col-12 col-sm-6" to={`/restaurants/${restaurant._id}`}>
                  <img className="card-img-top" src={restaurant.image} alt="Restaurant" />
                </Link>

                <div className="col-12 col-sm-6">
                  <div className="card-body">
                    <h5 className="card-title">{restaurant.name}</h5>
                    <p className="card-text"><BsStarFill />&nbsp;{restaurant.ratings}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderGrid = () => {
    if (mode !== 'grid') return null

    return (
      <div id="grid" className="row row-cols-1 row-cols-md-4 g-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className="col">
            <div className="card">
              <Link to={`/restaurants/${restaurant._id}`}>
                <img className="card-img-top" src={restaurant.image} alt="Restaurant" />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <p className="card-text"><BsStarFill />&nbsp;{restaurant.ratings}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div id="pages-restaurants-index" className="container">
      <CompsBreadcrumbs
        items={['Home', 'Restaurants']}
      />

      <div className="row">
        <div className="col-12 col-md-3">
          <br />
          <br />
          <h3>Dietaries</h3>
          <ul className="list-group fw-light">
            {
              filterable.dietaries.map((d) => (
                <li
                  key={d._id}
                  className={`list-group-item pointer ${selectedFilter === d._id && 'active'}`}
                  onClick={() => setSelectedFilter(d._id)}
                >{d.name}</li>
              ))
            }
          </ul>
          <br />
          <br />
          <h3>Categories</h3>
          <ul className="list-group fw-light">
            {
              filterable.categories.map((c) => (
                <li
                  key={c._id}
                  className={`list-group-item pointer ${selectedFilter === c._id && 'active'}`}
                  onClick={() => setSelectedFilter(c._id)}
                >{c.name}</li>
              ))
            }
          </ul>
        </div>

        <div className="col-12 col-md-9">
          <div className="mb-3">
            <button className="btn-transparent" onClick={() => setMode('grid')} type="button"><BsFillGridFill /></button>&nbsp;&nbsp;
            <button className="btn-transparent" onClick={() => setMode('list')} type="button"><BsList /></button>
          </div>

          { renderList() }
          { renderGrid() }
        </div>
      </div>
    </div>
  )
}

export default PagesRestaurantsIndex
