import InputForm from "components/navbar/inputForm";
import apiTokens from "config";
import defaultImage from "assets/logo.svg";
import {useState } from "react";
import {Header, Image, Container, Segment, Loader } from "semantic-ui-react";


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
          Authorization: `Bearer ${apiTokens.openAI_API}`,
          "User-Agent":"Chrome",
        },
        body:JSON.stringify({
          prompt: inputValue,
          n: 1,
          size: "512x512",
        })
      }
    );

    try {
      const { data } = await response.json();
      const imageUrl = data[0].url;
      setImageUrl(imageUrl);
      console.log("data received");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setRequestSent(false);
    }
  }

  return (
    <div>
      <Segment>
        <Container>
          <Header as='h3'>Explore the power of AI</Header>
          
          <div>
            <Header as='h4'>Please provide a description of an image you would like to create</Header>
            <InputForm inputValue={inputValue} setInputValue={setInputValue} action={generateResponse}/>
          </div>

          <div style={{ marginTop: '30px' }}>
            {requestSent ? (
                <Loader active inline='centered' size="large" />
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





