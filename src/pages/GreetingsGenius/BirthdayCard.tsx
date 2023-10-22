import { useState } from "react";
import { Header, Form, Image, Input, Loader } from "semantic-ui-react";
import defaultBirthdayImage from "assets/birthdayCard.png";
import OpenAI from 'openai';

const BirthdayCard = () => {

const [imageDescription, setImageDescription] = useState<string>("");
const [imageUrl, setImageUrl] = useState<string>("");
const [requestSent, setRequestSent] = useState<boolean>(false);

const generateImage = async () => {
    if(imageDescription === "") return;
    setRequestSent(true);
    const request = "Create a birthday card with " + imageDescription;
    const openaiApiKey = process.env.REACT_APP_OPENAI_API;
    const openai = new OpenAI({apiKey: openaiApiKey, dangerouslyAllowBrowser:true});
    const data = await openai.images.generate( {
        prompt:request,
        size:"512x512"
    })

    const result = data.data[0]?.url ?? ''; 
    setImageUrl(result);
    setRequestSent(false);
} 


return (
    <div>
        <Header as="h4" textAlign="left">
            Describe what would you like to see on the card in 1-3 words
        </Header>
        <Form onSubmit={generateImage} >
        
            <Form.Field 
            control={Input} 
            placeholder="Dinosaurs, cake, baloons"
            value={imageDescription}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => setImageDescription(e.target.value)}
            style={{ flex: 1 }} >
            </Form.Field>
            <Form.Button secondary content="Submit"/>
        
        </Form>
        <div style={{marginTop: "20px"}}>
        {
            requestSent? (
                <Loader active inline size="large" />
            ) :
            <Image src={imageUrl==="" ? defaultBirthdayImage : imageUrl}  size="large"/>
        }
        </div>
        
    </div>
  )
}

export default BirthdayCard;
