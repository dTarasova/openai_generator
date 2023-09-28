import apiTokens from "config";
import defaultImage from "logo.svg";
import { useRef, useState } from "react";
import { Button, Header, Input, Image, Container } from "semantic-ui-react";


const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState<string>("/");
  const [inputValue, setInputValue] = useState<string>('');
  
  const generateResponse = async () => {
    if (inputValue === "") {
      return 0;
    }

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
          size: "256x256",
        })
      }
    );
    console.log("fetch asked");
    let data = await response.json();
    let data_array = data.data;
    setImageUrl(data_array[0].url);
  }

  
  
  return (
    <div>
      <Container>
        <Header as='h3'>Here would be Image Generator</Header>
        {/* {TEXT} */}
        <div>
          <Header as='h4'>Please provide a description to an image you would like to create</Header>
          <div>
          <Input
            icon={{ name: 'search', circular: true, link: true }}
            placeholder='Search...'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={() => {generateResponse()}}>SUBMIT</Button>
          </div>
        </div>
        {/* {IMAGE} */}
        <p></p>
        <div>
          <Image src={imageUrl === "/" ? defaultImage : imageUrl} size='large' centered />
        </div>

      </Container>
      
    </div>
  )
}

export default ImageGenerator





