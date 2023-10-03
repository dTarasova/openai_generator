import { Grid, GridColumn, Header, Segment } from "semantic-ui-react"
import BirthdayText from "./BirthdayText"
import BirthdayCard from "./BirthdayCard"

const GreetingsGenius = () => {

   return (
    <div>
      <Segment>
        <Header as="h1">
          GreetingGenius
        </Header>
        <Header as="h3">
            This is a tool to create a perfect birthday card
        </Header>
        <Grid container columns={2} style={{padding: "30px"}}>
            <GridColumn>
              <BirthdayCard />
            </GridColumn>
            <GridColumn>
              <BirthdayText/>
            </GridColumn>
        </Grid>
      </Segment>
    </div>
  )
}

export default GreetingsGenius
