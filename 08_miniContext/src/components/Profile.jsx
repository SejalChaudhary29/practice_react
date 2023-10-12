import React from 'react'
import { useContext } from 'react'
import UserContext from '../Context/UserContext'
//Profile component for accesig data
function Profile() {
 
const {user} = useContext(UserContext)

if(!user){
    return <div> please login</div>
}
 return <div> Welcome {user.username}</div>
}

export default Profile