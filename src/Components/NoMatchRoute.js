import React from 'react'

export default function NoMatchRoute(location) {
  return (
    <div>
      <h3>No match for {location.pathname}</h3>
    </div>
  )
}
