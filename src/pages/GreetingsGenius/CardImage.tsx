import { useState } from "react";
import { Header, Form, Image, Input, Loader } from "semantic-ui-react";
import defaultCardImage from "assets/birthdayCard.png";
import OpenAI from "openai";

const CardImage = () => {
  const [imageDescription, setImageDescription] = useState<string>("");
  const [holiday, setHoliday] = useState<string>("Birthday");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [requestSent, setRequestSent] = useState<boolean>(false);

  const generateImage = async () => {
    if (imageDescription === "") return;
    setRequestSent(true);
    const request =
      `Create a congratulation card with ${imageDescription} for the holiday ${holiday}`;
    const openaiApiKey = process.env.REACT_APP_OPENAI_API;
    const openai = new OpenAI({
      apiKey: openaiApiKey,
      dangerouslyAllowBrowser: true,
    });
    const data = await openai.images.generate({
      prompt: request,
      size: "512x512",
    });

    const result = data.data[0]?.url ?? "";
    setImageUrl(result);
    setRequestSent(false);
  };

  return (
    <div style={{ alignContent: "center" }}>
      <Header as="h3" textAlign="center">
        Generate a perfect card
      </Header>
      <p>Describe what would you like to see on the card in 1-3 words</p>
      <Form onSubmit={generateImage}>
        <Form.Input
          placeholder="Cake, Christmas tree, puppies"
          value={imageDescription}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setImageDescription(e.target.value)
          }
        />
        <Form.Group inline>
          <Form.Field width={12}>
            <label>Holiday</label>
            <Input
              value={holiday}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setHoliday(e.target.value)
              }
            ></Input>
          </Form.Field>
          <Form.Button secondary content="Submit" width={4} />
        </Form.Group>
      </Form>
      <div style={{ marginTop: "1em" }}>
        {requestSent ? (
          <Loader active inline size="large" />
        ) : (
          <Image
            src={imageUrl === "" ? defaultCardImage : imageUrl}
            size="large"
            centered
          />
        )}
      </div>
    </div>
  );
};

export default CardImage;
