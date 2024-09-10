import React from 'react'
import Movies from './Movies'
import './App.css'
function App ()
{
  let movies1 = [
		{
			title: "RRR",
			year: 2023,
		},
		{
			title: "KGF",
			year: 2018,
		},
		{
			title: "salaar",
			year: 2024,
		},
		{
			title: "RRR",
			year: 2023,
		},
		{
			title: "KGF",
			year: 2018,
		},
		{
			title: "salaar",
			year: 2024,
		},
		{
			title: "RRR",
			year: 2023,
		},
		{
			title: "KGF",
			year: 2018,
		},
		{
			title: "salaar",
			year: 2024,
		}
	]
  return (
		<div>
			<Movies list={movies1} />
			<Movies list={movies1} />
			<Movies list={movies1} />
			<Movies list={movies1} />
			<Movies list={movies1} />
		</div>
	)
}

export default App
