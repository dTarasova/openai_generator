import { NavLink } from "react-router-dom";
import { Button, List } from "semantic-ui-react";

interface Props {
  currentPage: string;
}

const NavLinks = ({ currentPage }: Props) => {
  return (
    <List horizontal>
      <List.Item>
        <List.Content>
          <Button inverted as={NavLink} to="/" fluid>
            Home
          </Button>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <Button inverted as={NavLink} to="image-generator" fluid>
            Image Generator
          </Button>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <Button inverted as={NavLink} to="greetings-genius" fluid>
            Greetings Genius
          </Button>
        </List.Content>
      </List.Item>
    </List>
  );
};

export default NavLinks;
