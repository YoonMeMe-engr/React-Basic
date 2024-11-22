import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Profile = () => {
  const {id} = useParams()
  console.log(useParams())

  const navigation = useNavigate()

  const handleHome = () => {
    // navigation('/home')
    navigation('/user/skill')
  }

  return (
    <>
    <h1>Profile Id: {id}</h1>
    <button onClick={handleHome}>Navigation to Home</button>
    </>
  )
}
