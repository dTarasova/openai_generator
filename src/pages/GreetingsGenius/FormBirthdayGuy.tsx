import { Component, useState } from 'react'
import {
  Button,
  Form,
  Input,
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
  const [age, setAge] = useState<number>(0);
  const [relationships, setRelationships] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [fullRequest, setFullRequest] = useState<string>("");

  const handleNameChange = (_e: React.ChangeEvent<HTMLInputElement>, { value }: { value: string }) => {
    setName(value);
  };
  const handleGenderChange = (_e: React.ChangeEvent<HTMLInputElement>, { value }: { value: string }) => {
    setGender(value);
  };
  const handleAgeChange = (_e: React.ChangeEvent<HTMLInputElement>, { value }: { value: number }) => {
    setAge(value);
  };
  const handleRelationshipsChange = (_e: React.ChangeEvent<HTMLInputElement>, { value }: { value: string }) => {
    setRelationships(value);
  };
  const handleAboutChange = (_e: React.ChangeEvent<HTMLInputElement>, { value }: { value: string }) => {
    setAbout(value);
  };

  const handleSubmit = () => {

    setFullRequest(`Create a sweet congratulations for a birthday text for a 
                    ${age} years old ${gender} named ${name}
                    that is my ${relationships}.
                    Here is an additional info about this person: ${about}`);

    console.log(fullRequest);
  }
  //TODO: language of greeting, what would like to wish
  const initialRequestDescription: string = "";

  
    return (
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
        
        <Form.Field
          control={TextArea}
          label='About'
          placeholder='Tell us more about the person you congratulate...'
          value={about}
          onChange={handleAboutChange}
        />
        
        <Form.Button content="Submit" />
      </Form>
    )
  }

export default FormBirthdayGuy