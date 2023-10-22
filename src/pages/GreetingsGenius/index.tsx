import { Grid, GridColumn, Header } from "semantic-ui-react"
import { useMediaQuery } from 'react-responsive';
import BirthdayText from "./BirthdayText"
import BirthdayCard from "./BirthdayCard"

const GreetingsGenius = () => {

  const isMobile = useMediaQuery({ query: '(max-width:767px)' });
   return (
    <div>
        <Header as="h1">
          GreetingGenius
        </Header>
        <Header as="h3">
            You can use this tool to create a perfect image and text for a birthday card
        </Header>
        {isMobile ? (
          <>
            <BirthdayText />
            <div style={{padding: "2em"}} >
              <BirthdayCard />
            </div>
          </>

        ) : (
        <Grid container columns={2} style={{padding: "1em"}}>
            <GridColumn>
              <BirthdayCard />
            </GridColumn>
            <GridColumn>
              <BirthdayText/>
            </GridColumn>
        </Grid>
        )}
        
    </div>
  )
}

export default GreetingsGenius
