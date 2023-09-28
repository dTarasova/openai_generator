import apiTokens from "config";
import defaultImage from "logo.svg";
import { useRef, useState } from "react";
import { Button, Header, Input, Image, Container } from "semantic-ui-react";


const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState<string>("/");
  // refs do not make components rerender while useEffect does 
  // returns object 
  
  let inputRef = useRef<HTMLInputElement>(null);
  const generateResponse = async () => {
    if (inputRef.current !== null && inputRef.current.value === "") {
      return 0;
    }
    console.log("in generate response")
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
          prompt: `${inputRef.current?.value}`,
          n: 1,
          size: "256x256",
        })
      }
    );
    console.log("fetch asked");
    let data = await response.json();
    console.log(data);
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
//witch with the luck manipulation superpower
export default ImageGenerator

// TODO: Nice style  - те же инструменты, что используются в проекте
// Loading bar
// оформить ключи скрыть 



