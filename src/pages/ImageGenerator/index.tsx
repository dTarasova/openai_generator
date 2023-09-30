import apiTokens from "config";
import defaultImage from "logo.svg";
import { useEffect, useState } from "react";
import { Button, Header, Input, Image, Container, Segment, Grid } from "semantic-ui-react";


const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState<string>("/");
  const [inputValue, setInputValue] = useState<string>('');

  useEffect(() => {
    const keyHandler = (event: {which: number}) => {
      if (event.which === 13) {
        generateResponse();
      }
    }
    window.addEventListener('keydown', keyHandler);
    return () => {
      window.removeEventListener('keydown', keyHandler);
    }
  })

  const generateResponse = async () => {
    if (inputValue === "") {
      return 0;
    }
    console.log(inputValue);

    const response = await fetch (
      "https://api.openai.com/v1/images/generations", {
        method:"POST",
        headers: {
          "Content-Type":"application/json",
          Authorization:
          apiTokens.openAI_API,
          "User-Agent":"Chrome",
        },
        body:JSON.stringify({
          prompt: inputValue,
          n: 1,
          size: "512x512",
        })
      }
    );

    let data = await response.json();
    let data_array = data.data;
    setImageUrl(data_array[0].url);

  }


  return (
    <div>
      <Segment>
        <Container>
          <Header as='h3'>Here would be Image Generator</Header>
          {/* {TEXT} */}
          <div>
            <Header as='h4'>Please provide a description to an image you would like to create</Header>
            <Grid>
              <Grid.Column width={2}/>
              <Grid.Column width={10}>
                <Input
                icon={{ name: 'search', circular: true, link: true }}
                placeholder='Search...'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                fluid
                />
              </Grid.Column>
              <Grid.Column width={2} textAlign="center">
                <Button fluid onClick={() => {generateResponse()}}>SUBMIT</Button>
              </Grid.Column>
            </Grid>
          </div>
          {/* {IMAGE} */}
          <p></p>
          <div>
            <Image src={imageUrl === "/" ? defaultImage : imageUrl} size='large' centered />
          </div>

      </Container>

      </Segment>
      
      
    </div>
  )
}

export default ImageGenerator





