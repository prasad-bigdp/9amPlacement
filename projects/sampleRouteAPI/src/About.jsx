import React from 'react'
import { useState,useEffect } from 'react'
function About ()
{
  const [x,setX]=useState(false)
  useEffect(() =>
  {
    function fetchData1 ()
    {
       fetch("https://official-joke-api.appspot.com/random_joke")
					.then((res) => {
						console.log(res)
						return res.json()
					})
					.then((data) => console.log(data))
					.catch((err) => console.log(err))
    }
  async  function fetchData2 ()
    {
      const res = await fetch("https://offial-joke-api.appspot.com/random_joke");
      const data= await res.json()
    console.log(data)
    setX(true)
    }
    fetchData2()
  },[])
  return (
		<div>
      {x && (<p>i'm About</p>)}
		</div>
	)
}

export default About
