import React from 'react'

function CompsBreadcrumbs({ items }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {
          items.map((item) => <li className="breadcrumb-item" key={item}>{item}</li>)
        }
      </ol>
    </nav>
  )
}

export default CompsBreadcrumbs
