import React from 'react'
import { useState } from 'react'

const Home = () => {
    const[title, setTitle] = useState("")


  return (
    <div>
     <input
     type="text"
     placeholder='Enter tittle here'
     value={title}
     onChange={(e) => setTitle(e.target.value)}
     
     />
    </div>
  )
}

export default Home
