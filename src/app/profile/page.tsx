import React from 'react'
import ProfileForm from './ProfileForm'
import { getSelf } from '../../../lib/auth-service'

async function Profile() {
  const self = await getSelf()

  return (
    <div>
        <ProfileForm student={self}/>
    </div>
  )
}

export default Profile