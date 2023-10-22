import { Grid, GridColumn, Header } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import CardText from "./CardText";
import CardImage from "./CardImage";

const GreetingsGenius = () => {
  const isDesktop = useMediaQuery({ query: "(min-width:991px)" });
  return (
    <div>
      <Header as="h1">GreetingGenius</Header>
      <Header as="h3">
        You can use this tool to create a perfect congratulations text and card
      </Header>
      {isDesktop ? (
        <Grid container columns={2} style={{ padding: "1em" }}>
          <GridColumn>
            <CardImage />
          </GridColumn>
          <GridColumn>
            <CardText />
          </GridColumn>
        </Grid>
      ) : (
        <>
          <CardText />
          <div style={{ padding: "2em" }}>
            <CardImage />
          </div>
        </>
      )}
    </div>
  );
};

export default GreetingsGenius;
