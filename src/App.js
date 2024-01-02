
import userProfile from   `./components/UserProfile/index`
const userDetails = {
  imageUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
  name: 'vishnu',
  role: 'software',
}

const App = () => <UserProfile userDetails={userDetails}/>

export default App