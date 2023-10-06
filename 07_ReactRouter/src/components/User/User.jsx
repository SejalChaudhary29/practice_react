import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <div className='text-center p-4 text-2xl bg-orange-400 font-bold'>User:{userid}</div>
  )
}

export default User