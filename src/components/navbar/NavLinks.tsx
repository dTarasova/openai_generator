import { NavLink } from 'react-router-dom';
import { Button, List, ListDescription } from 'semantic-ui-react';

interface Props {
    currentPage: string
};

const NavLinks = ({currentPage} : Props) => {
  
    return (
    <div>
        <List selection>
            
            <List.Item as="li">
                <List.Content>
                    <Button as={NavLink} to="/">
                        Home
                    </Button>
                </List.Content>
            </List.Item>

            <List.Item as="li">
                <List.Content>
                    <Button as={NavLink} to="image-generator">
                        Image Generator
                    </Button>
                </List.Content>
            </List.Item>

        </List>
      
    </div>
  )
}

export default NavLinks;
