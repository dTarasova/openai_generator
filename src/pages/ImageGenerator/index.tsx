import InputForm from "components/navbar/inputForm";
import apiTokens from "config";
import defaultImage from "assets/logo.svg";
import { useEffect, useState } from "react";
import { Button, Header, Input, Image, Container, Segment, Grid, Loader } from "semantic-ui-react";


const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState<string>("/");
  const [inputValue, setInputValue] = useState<string>('');
  const [requestSent, setRequestSent] = useState<boolean>(false);

  const generateResponse: () => Promise<void>  = async () => {
    if (inputValue === "") {
      return;
    }
    console.log(inputValue);
    setRequestSent(true);
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
    setRequestSent(false);
    console.log("data received");
  }


  return (
    <div>
      <Segment>
        <Container>
          <Header as='h3'>Here would be Image Generator</Header>
          <div>
            <Header as='h4'>Please provide a description to an image you would like to create</Header>
            <InputForm inputValue={inputValue} setInputValue={setInputValue} action={generateResponse}/>
          </div>
          {/* {IMAGE} */}
          <div style={{ marginTop: '30px' }}>
            {requestSent ? (
                <Loader active inline='centered' />
              ) : (
                  <Image src={imageUrl === "/" ? defaultImage : imageUrl} size='large' centered />
              )}
          </div>
      </Container>

      </Segment>
    </div>
  )
}

export default ImageGenerator





