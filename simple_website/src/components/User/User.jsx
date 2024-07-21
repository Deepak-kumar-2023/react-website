import React from 'react'

import { useParams } from 'react-router-dom'

function User() {
    const { userId } = useParams()
  return (
    <div className='bg-green-700 flex justify-center items-center w-full h-16 text-center text-4xl '>User : {userId}</div>
  )
}

export default User