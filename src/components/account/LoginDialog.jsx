import { Dialog, Box, Typography, styled, List, ListItem } from "@mui/material";
import image from './messenger.png'
// import { qrCodeImage } from "../../constants/data";
import jwt_decode from "jwt-decode";
import { GoogleLogin } from "@react-oauth/google";
import  {useContext} from 'react';
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../services/api";

const Component = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const Container1 = styled(Box)`
  padding: 56px 0 0 56px;
`;

const Logo = styled("img")({
  height: 200,
  // width: 50,
  margin: "0 0 0 300px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: #525252;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 20px;
`;
const StyledList = styled(List)`
  & > li {
    padding: 0 0 20px 300px;
    margin-top: 50px;
    font-size: 18px;
    line-height: 28px;
  }
`;

const dialogstyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const LoginDialog = () => {

  const {setAccount} = useContext(AccountContext);

  const onLoginSucess = async (res) => {
    const decoded = jwt_decode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  };

  const onLoginError = (res) => {
    console.log("login failed", res);
  };
  // const path ='./messenger.png'
  return (
    <Dialog open={true} PaperProps={{ sx: dialogstyle }} hideBackdrop={true}>
      <Component>
        <Container1>
          <Title>
            Discover the Joy of Real-time Conversations - Chat and Share with Me
            Chat!{" "}
          </Title>
        {/* <ima src= {image} alt = 'image' /> */}

        </Container1>
        <Box style={{ position: "relative" }}>
          <Logo src={image} alt="image" />
          <StyledList>
            {" "}
            <ListItem> Sign In with Google Account</ListItem>{" "}
          </StyledList>
          <Box
            style={{
              // position: "absolute",
              // top: "50%",
              transform: "translateX(35%)",
            }}
          >
            <GoogleLogin onSuccess={onLoginSucess} onError={onLoginError} />
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
