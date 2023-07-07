import { Box, styled, Typography, Divider } from "@mui/material";

// import { emptyChatImage } from "../../../constants/data";
import logo from "../../account/messenger.png"

const Component = styled(Box)`
  background: #f8f9fa;
  padding: 30px 0;
  text-align: center;
  height: 100%;
`;

const Container = styled(Box)`
  padding: 0 200px;
`;

const Image = styled("img")({
  marginTop: 100,
  // width: 400,
  height: 300,
});

const Title = styled(Typography)`
  font-size: 32px;
  font-family: inherit;
  font-weight: 300;
  color: #41525d;
  margin-top: 25px 0 10px 0;
`;

const SubTitle = styled(Typography)`
  font-size: 14px;
  color: #667781;
  font-weight: 400;
  font-family: inherit;
`;

const StyledDivider = styled(Divider)`
  margin: 40px 0;
  opacity: 0.4;
`;

const EmptyChat = () => {
  return (
    <Component>
      <Container>
        <Image src={logo} alt="empty" />
        <Title>Me Chat Web</Title>
        <SubTitle >
          Unlock a World of Conversations - Chat and Share with {"  "} Me Chat!
        </SubTitle>
        <StyledDivider />
      </Container>
    </Component>
  );
};

export default EmptyChat;
