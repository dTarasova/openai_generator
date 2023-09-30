import { NavLink } from 'react-router-dom';
import { Button, List, ListDescription } from 'semantic-ui-react';

interface Props {
    currentPage: string
};

const NavLinks = ({currentPage} : Props) => {
  
    return (
        <List  >
            
            <List.Item as="li">
                <List.Content>
                    <Button as={NavLink} to="/" fluid>
                        Home
                    </Button>
                </List.Content>
            </List.Item>
            <List.Item as="li">
                <List.Content>
                    <Button as={NavLink} to="image-generator" fluid>
                        Image Generator
                    </Button>
                </List.Content>
            </List.Item>

        </List>
  )
}

export default NavLinks;
