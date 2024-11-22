import React from 'react'

export const ProtectedRoute = ({user, children}) => {
    if(!user) {
        return (
            <h1>User Not Found</h1>
        )
    }
  return (
    <>{children}</>
  )
}
