// Card component
import React from 'react'

function Card({ children }) {
  return (
    <div className="bg-dark-card rounded-lg shadow-md p-4">
      {children}
    </div>
  )
}

export default Card
