import React from 'react'
import { Link } from 'react-router-dom'

function PagesNotFound() {
  return (
    <div id="pages-not-found" className="page-100">
      <h1>Page not found</h1>
      <h4 className="first-par my-3">Sorry, but the page you are looking for doesn&apos;t exist.</h4>
      <h4 className="second-par">But there&apos;s loads more to see!</h4>
      <Link to="/" className="btn my-2">
        Go Home
      </Link>
    </div>
  )
}

export default PagesNotFound
