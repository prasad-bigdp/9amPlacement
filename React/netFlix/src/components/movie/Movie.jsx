import React from 'react'
import './Movie.css'
import PropTypes from "prop-types"
function Movie(props) {
  return (
    <div>
      <img src={props.url} alt={props.name} />
      <h2>{props.name}</h2>
    </div>
  )
}
Movie.propTypes = {
  name: PropTypes.string,
  url:PropTypes.string
}
export default Movie
