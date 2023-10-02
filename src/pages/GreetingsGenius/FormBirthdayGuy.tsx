
import { useState } from 'react'
import {
  Form,
  Input,
  Select,
  TextArea,
} from 'semantic-ui-react'

const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
]

interface Props {
  request: string,
  setRequest: React.Dispatch<React.SetStateAction<string>>
};

const FormBirthdayGuy: React.FC<Props> = ({request, setRequest} : Props) => {

  const [name, setName] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [relationships, setRelationships] = useState<string>("");
  const [about, setAbout] = useState<string>("");
  const [wishes, setWishes] = useState<string>("");
  const [language, setLanguage] = useState<string>("Russian");

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
  const handleWishesChange = (_e: React.ChangeEvent<HTMLInputElement>, { value }: { value: string }) => {
    setWishes(value);
  };
  const handleLanguageChange = (_e: React.ChangeEvent<HTMLInputElement>, { value }: { value: string }) => {
    setLanguage(value);
  };

  const handleSubmit = () => {

    setRequest(`Create a sweet personal congratulations for a birthday text in ${language} language
                    for a ${age} years old ${gender} named ${name}
                    that is my ${relationships}.
                    Here is an additional info about this person: ${about}
                    Include in the following wishes, maybe reformulate a bit ${wishes}`);

    console.log(request);
  }
  
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
        
        
        <Form.Group>
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Form.Field
              control={Input}
              label='Language'
              value={language}
              onChange={handleLanguageChange}
            />
          </div>
          <div style={{ flex: '1', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <Form.Button secondary content='Submit' />
          </div>
      </Form.Group>
        
        
        
      </Form>
    )
  }

export default FormBirthdayGuy