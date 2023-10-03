import apiTokens from 'config';
import { useState } from 'react';
import OpenAI from 'openai';
import {
  Form,
  Input,
  Loader,
  Segment,
  Select,
  TextArea,
} from 'semantic-ui-react'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const sizeOfAnswerOptions = [
  { key: 's', text: 'Short', value: 'short' },
  { key: 'm', text: 'Medium', value: 'medium' },
  { key: 'l', text: 'Long', value: 'long' }
]

const FormBirthdayGuy: React.FC = () => {

  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState<string>("0");
  const [relationships, setRelationships] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [wishes, setWishes] = useState<string>("");
  const [language, setLanguage] = useState<string>("Russian");
  const [sizeOfGreeting, setSizeOfGreeting] = useState<string>("");
  const [result, setResult] = useState<string>("");


  const createChangeHandler = (setterFunction:(value: React.SetStateAction<string>) => void) => 
                                            (e: React.ChangeEvent<HTMLInputElement>) => {
    setterFunction(e.target.value);
    
  };
  
  const handleNameChange = createChangeHandler(setName);
  const handleGenderChange = createChangeHandler(setGender);
  const handleAgeChange = createChangeHandler(setAge);
  const handleRelationshipsChange = createChangeHandler(setRelationships);
  const handleAboutChange = createChangeHandler(setAbout);
  const handleWishesChange = createChangeHandler(setWishes);
  const handleLanguageChange = createChangeHandler(setLanguage);
  const handleSizeOfGreetingChange = createChangeHandler(setSizeOfGreeting);
  

  const [requestSent, setRequestSent] = useState<boolean>(false);
  const generate_via_chatCompletions = async (textRequest: string) => {
    const openai = new OpenAI({apiKey:apiTokens.openAI_API, dangerouslyAllowBrowser: true});

   
      let completion = await openai.chat.completions.create({
        messages: [
        {"role": "user", "content": textRequest}],
        model: "gpt-3.5-turbo",
      });

    let answer = completion.choices[0].message.content;
    if (answer !== null) {
      setResult(answer);
    }
    setRequestSent(false);
  }



  const handleSubmit = () => {
    setRequestSent(true);
    let subrequestAbout = about === "" ? "" : `Here is an additional info about this person: ${about}`;
    let subrequestWishes = wishes === "" ? "" : `Include in the following wishes, maybe reformulate a bit ${wishes}`;
    let textRequest = (`Create a ${sizeOfGreeting} sweet personal congratulations 
                        for a birthday text in ${language} language
                        for a ${age} years old ${gender} named ${name}
                        that is my ${relationships}.` + subrequestAbout + subrequestWishes);
                    

    generate_via_chatCompletions(textRequest);
    
  }

    return (
      <div>

      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Name'
            placeholder='Name'
            value={name}
            onChange={handleNameChange}
          />
          <Form.Field
            control={Select}
            label='Gender'
            options={genderOptions}
            placeholder='Gender'
            value={gender}
            onChange={handleGenderChange}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Age'
            placeholder='Age'
            value={age}
            onChange={handleAgeChange}
          />
          <Form.Field
            control={Input}
            label='Relationships'
            placeholder='Friend/colleague/...'
            value={relationships}
            onChange={handleRelationshipsChange}
          />
        </Form.Group>
        <Form.Group widths='equal'>
          <Form.Field
            control={TextArea}
            label='About'
            placeholder='Tell us more about the person you congratulate...'
            value={about}
            onChange={handleAboutChange}
          />

          <Form.Field
            control={TextArea}
            label='Wishes'
            placeholder='Do you have anything specific you would like to wish? '
            value={wishes}
            onChange={handleWishesChange}
          />
        </Form.Group>

        <Form.Group widths='equal'>
          <Form.Field
            control={Input}
            label='Language'
            placeholder='Age'
            value={language}
            onChange={handleLanguageChange}
          />
          <Form.Field
            control={Select}
            label='Size of greeting'
            options={sizeOfAnswerOptions}
            value={sizeOfGreeting}
            onChange={handleSizeOfGreetingChange}
          />
        </Form.Group>
        
        <Form.Button secondary content='Submit' />
      </Form>
      <div style={{marginTop: "20px"}}>
      {
        requestSent ? (
          <Loader active inline='centered' size="large"/>
        ) :
          <Segment size="large">
            {result}
          </Segment>
       
      }
       </div>
      </div>


    )
  }

export default FormBirthdayGuy