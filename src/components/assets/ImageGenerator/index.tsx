import defaultImage from "logo.svg";
import { useRef, useState } from "react";

const ImageGenerator = () => {
  const [imageUrl, setImageUrl] = useState<string>("/");
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
          "Bearer ___",
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
      <h3>Here would be Image Generator</h3>
      {/* {TEXT} */}
      <div>
        <h4>Please provide a description to an image you would like to create</h4>
        <div>
        <input type="text" ref={inputRef} />
        <button onClick={() => {generateResponse()}}>SUBMIT</button>
        </div>
        
      </div>
      {/* {IMAGE} */}
      <p></p>
      <div>
        <img 
          src={imageUrl === "/" ? defaultImage : imageUrl} 
          alt="default_image"
          width="400" height="400"/>
      </div>
    </div>
  )
}
//witch with the luck manipulation superpower
export default ImageGenerator

// TODO: Nice style 
// Loading bar
// оформить ключи скрыть 


