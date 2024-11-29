import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'

const AuthLayout = ({children} : {children: React.ReactNode}) => {
  return (
      <div className='flex items-center justify-center w-full'>
        {children}
      </div>
  )
}

export default AuthLayout