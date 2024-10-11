
import React from 'react'

const ChevDown = ({ size, color, className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" width={size} color={color} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={className}>
      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}

export default ChevDown