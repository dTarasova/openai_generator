import { useState } from "react"
import { Grid, GridColumn, GridRow, Header, Segment, Image, Form, Input } from "semantic-ui-react"
import defaultBirthdayImage from "assets/birthdayCard.png"
import FormBirthdayGuy from "./FormBirthdayGuy"



const GreetingsGenius = () => {

  const [imageDescription, setImageDescription] = useState<string>("");
  const [userImageDescription, setUserImageDescription] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");


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
              <Header as="h4" textAlign="left">
                Describe what would you like to see on the card
              </Header>
              <Form >
              {/* <Form onSubmit={generateImage}> */}
                <Form.Group inline>
                  <Form.Field 
                    control={Input} 
                    label="Description: for better performance use 1-3 words" 
                    placeholder="Dinosaurs, cake, baloons"
                    value={imageDescription}
                    >
                    {/* onChange={handleImageDescriptionChange}> */}
                  </Form.Field>
                  <Form.Button secondary content="Submit"/>
                </Form.Group>
              </Form>

              <Image src={imageUrl==="" ? defaultBirthdayImage : imageUrl}  size="large"/>
            </GridColumn>
            <GridColumn>
              <FormBirthdayGuy/>
            </GridColumn>
        </Grid>
      </Segment>
    </div>
  )
}

export default GreetingsGenius
