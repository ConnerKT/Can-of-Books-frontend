import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
function Profile() {
    const { user } = useAuth0()
    console.log(user)
    const { name, picture, email } = user
    return (
        <div>
            <p>{name}</p>
            <img src={picture} alt='profile pic' />
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}

export default Profile