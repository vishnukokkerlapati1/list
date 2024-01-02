import `./index.css`
const UserProfile = props => {
  const {UserDetails} = props
  const {imageUrl,name,role} = UserDetails
  return (
    <div className="user-card-container">
      <img src={imageUrl} className=" avatar" />
      <div className="user-details-container">
          <h1 className="user-name">{name}</h1>
          <p className="user-designation">{role}</p>
      </div> 
    </div>
  )
}
export default UserProfile
