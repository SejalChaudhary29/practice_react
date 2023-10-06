// import React, { useEffect, useState } from 'react'
import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
     const data = useLoaderData()
    // const [data , setData]= useState(0)
    // useEffect(()=>{

    //     fetch('https://api.github.com/users/SejalChaudhary29')
    //     .then((res)=> res.json())
    //     .then((data)=>{
    //         console.log(data)
    //       setData(data)})
    // },[])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 test-3xl'>Github Followers: {data.followers}
    
    <img src={data.avatar_url} alt="Github pic" width={300} />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/SejalChaudhary29')
    return response.json()
}