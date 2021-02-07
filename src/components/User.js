const User = ({user}) => {
  return (
    <div>
      <h3>Name: {user.displayName}</h3>
      <h4>Username: {user.userName}</h4>
      <h5>ID: {user.id}</h5>
    </div>
  )
}

export default User
