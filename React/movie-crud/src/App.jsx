import { useState } from 'react';
import React from 'react'
import './App.css'
function App ()
{
  const [imgUrl, setImgURL] = useState('');
  const [title, setTitle] = useState('');
  const [movies, setMovies] = useState([])
  function addMovies(){
    const obj = {
      image: imgUrl,
      title:title
    }
    console.log(obj)
    setMovies([...movies,obj])
  }
  return (
		<>
			<div>
				<h1>Movie-crud</h1>
				<input
					type='url'
					value={imgUrl}
          onChange={(e) => setImgURL(e.target.value)}
          placeholder='Enter movie URL'
				/>
				<input
					type='text'
					value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter movie Title'
				/>
				<button onClick={addMovies}>Enter</button>
      </div>
      <div>
        {
          movies.map((m,i) => (
            <div key={i}>
              <img src={m.image} alt={m.title}  height="100"/>
              <h2>Movie Name: {m.title}</h2>
              <button onClick={() =>
              {
                setMovies(movies.filter((x,ind)=>ind!=i))
              }}>delete</button>
            </div>
          ))
         }
      </div>
  
		</>
	)
}

export default App
