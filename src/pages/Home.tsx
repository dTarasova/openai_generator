import { Header, Image } from 'semantic-ui-react'
import welcomeImage from 'assets/korgi.png'

const Home = () => {
  return (
    <div>
      <Header as='h1' color='grey'>
        Hi there :{'\u0029'}
      </Header>
      <div style={{padding: '20px'}}>
        <Header as='h3'>Welcome to the application. Feel free to explore the pages!</Header>
        <Image src={welcomeImage} size='large' centered/>
      </div>
    </div>
  )
}

export default Home
