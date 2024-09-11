import React from 'react'

function Child(props) {
  return (
    <div className='movies'>
          {props.movies.map((m) =>
          (
              <div className='movie'>
                  <h2>{m.Title}</h2>  
                  <p>Count: {props.count}</p>
                  <p>{props.Child}</p>
              </div>
          ))}
          <GrandChild />
    </div>
  )
}

import PropTypes from 'prop-types'
import GrandChild from './GrandChild';

Child.propTypes = {
    movies: PropTypes.array.isRequired,
    count:PropTypes.number
}


export default Child;
