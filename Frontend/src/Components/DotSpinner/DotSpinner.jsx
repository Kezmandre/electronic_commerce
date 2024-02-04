import React from 'react'

const DotSpinner = () => {
  return (
    <div>
    {/* <p class="mb-2 text-sm font-medium text-gray-500">Spinner with dot</p> */}
    <div class="py-2 text-blue-600">
      <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <g transform="translate(50,50)">
          <g transform="scale(0.7)">
            <circle cx="0" cy="0" r="50" fill="currentColor"></circle>
            <circle cx="0" cy="-28" r="15" fill="white">
              <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 0 0;360 0 0"></animateTransform>
            </circle>
          </g>
        </g>
      </svg>
    </div>
  </div>
  )
}

export default DotSpinner