import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
function App ()
{
  const [c, setC] = useState(100)
  const [products,setProducts]= useState([])
  useEffect(() =>
  {// first time, 
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
    .then((data)=>setProducts(data))
   },[c])
  return (
		<div>
			<h1>Counter</h1>
			<p>count: {c}</p>
      <button onClick={() => setC(c + 1)}>+</button>
      {
        products.map((pro) => (
          <div className='product'>
            <img src={pro.image} alt={pro.title} height="200"/>
            <h1>{pro.title}</h1>
            <p>Price:₹ {pro.price} </p>
          </div>
        ))
      }
		</div>
	)
}

export default App
