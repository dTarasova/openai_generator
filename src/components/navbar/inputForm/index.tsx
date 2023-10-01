import React, { FC } from 'react'
import { Button, Grid, Input } from 'semantic-ui-react'

interface Props {
    inputValue: string,
    setInputValue: React.Dispatch<React.SetStateAction<string>>, 
    action: () => Promise<void>
};

const InputForm = ({inputValue, setInputValue, action } : Props) => {
    const keyHandler = (event: {which: number}) => {
        if (event.which === 13) {
          action();
        }
      }
  
    return (
    <div>
        <Grid>
            <Grid.Column width={2}/>
            <Grid.Column width={10}>
                <Input
                icon={{ name: 'search', circular: true, link: true }}
                placeholder='Search...'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                fluid
                onKeyDown={keyHandler}
                />
            </Grid.Column>
            <Grid.Column width={2} textAlign="center">
                <Button fluid onClick={() => {action()}}>SUBMIT</Button>
            </Grid.Column>
        </Grid>
      
    </div>
  )
}

export default InputForm;
