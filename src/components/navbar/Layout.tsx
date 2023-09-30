import { Container, Grid, Segment } from 'semantic-ui-react'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const {pathname} = useLocation();
    return (
        <Segment inverted attached> {/* inverted = black background */}
            <Container>
                <Navbar currentPage={pathname} />
                <Outlet/> 
                {/* used for rendering all rest of the content in nested routes */}
            </Container>
        </Segment>
  )
}

export default Layout
