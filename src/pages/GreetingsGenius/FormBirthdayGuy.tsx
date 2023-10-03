
import { useState } from 'react'
import {
  Form,
  Input,
  Segment,
  Select,
  TextArea,
} from 'semantic-ui-react'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

const FormBirthdayGuy: React.FC = () => {

  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState<string>("0");
  const [relationships, setRelationships] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [wishes, setWishes] = useState<string>("");
  const [request, setRequest] = useState<string>("");

  const createChangeHandler = (setterFunction:(value: React.SetStateAction<string>) => void) => 
                                            (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Handler name: " + name);
    console.log("Handler target: " + e.target.value);
    setterFunction(e.target.value);
    
  };
  
  const handleNameChange = createChangeHandler(setName);
  const handleGenderChange = createChangeHandler(setGender);
  const handleAgeChange = createChangeHandler(setAge);
  const handleRelationshipsChange = createChangeHandler(setRelationships);
  const handleAboutChange = createChangeHandler(setAbout);
  const handleWishesChange = createChangeHandler(setWishes);
  
  

  const handleSubmit = () => {
    setRequest(`Create a sweet personal congratulations for a birthday text in
                    for a ${age} years old ${gender} named ${name}
                    that is my ${relationships}.
                    Here is an additional info about this person: ${about}
                    Include in the following wishes, maybe reformulate a bit ${wishes}`);

    console.log("request: " + request);
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
        
        <Form.Button secondary content='Submit' />
      </Form>

      <div style={{marginTop: "20px"}}>
        <Segment size="large">
          {request}
        </Segment>
      </div>
      </div>


    )
  }

export default FormBirthdayGuy