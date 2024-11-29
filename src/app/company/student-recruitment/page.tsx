import React from 'react'
import { SidebarDemo } from "./recruitmentLayout"
import { getSelf } from '../../../../lib/auth-service'

async function Home() {
  const self = await getSelf()
  return (
    
    <div>
        <SidebarDemo  />
    </div>
  )
}

export default Home

