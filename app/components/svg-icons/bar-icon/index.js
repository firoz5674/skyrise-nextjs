
import React from 'react'

const BarIcon = ({ size, color, onClick }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" onClick={onClick} fill="none" color={color} width={size} viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
    </svg>
  )
}

export default BarIcon