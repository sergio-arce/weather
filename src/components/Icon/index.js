
import React from 'react'

const Icon = ({ icon, text }) => {
  return <>
    <img  src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} alt={`${text}`}/>
    <p>{text}</p>
  </>
}
export default Icon
