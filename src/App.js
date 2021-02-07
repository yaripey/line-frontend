import React from 'react'
import { useQuery } from '@apollo/client'
import {ALL_USERS} from './services/queries'

import UserList from './components/UserList'


const App = () => {
  const result = useQuery(ALL_USERS)

  if (result.loading) {
    return <div>Now loading...</div>
  }

  return (
    <div>
      <UserList users={result.data.allUsers} />
      {console.log(result.data.allUsers)}
    </div>
  )
}

export default App
