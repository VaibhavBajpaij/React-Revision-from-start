import { useContext } from 'react'
import UserContext from './UserContext'

function Profile() {
  const { user } = useContext(UserContext)  // ✅ correct hook usage

  if (!user) return <div>Please Login</div>
  return <div>Welcome {user.username}</div>
}

export default Profile
