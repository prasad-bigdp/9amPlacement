import React from 'react'

function Movies(props) {
  return (
    <div className='movies'>
          {props.list.map((val) =>
          (
              <div className='movie'>
                  <h2>{val.title}</h2>
                  <p>{val.year}</p>
              </div>
          ))} 
    </div>
  )
}

export default Movies
