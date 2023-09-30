import { Container, Grid, Segment } from 'semantic-ui-react'
import Navbar from './Navbar'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
    const {pathname} = useLocation();
    return (
        <div>
            <Segment inverted attached size='large'> {/* inverted = black background */}
                <Container>
                    <Grid>
                        <Grid.Row stretched>
                            <Grid.Column textAlign='left'>
                                <Navbar currentPage={pathname} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </Segment>

            <Container>
                <p></p>
                <Outlet/> {/* used for rendering all rest of the content in nested routes */}     
            </Container>

        </div>
        
  )
}

export default Layout
