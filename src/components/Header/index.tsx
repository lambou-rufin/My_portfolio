import { styled, Box } from "@mui/material";
import { Constants } from "../../data/constants";
import { StyleConstants } from "../../styles/StyleConstants";
import { NavigationList } from "../Content/Navigation";
import { FC } from "react";

const IntroductionContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  height: 80,
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  backgroundColor: StyleConstants.HEADER,
  color: "white",
  top: 0,
  left: 0,
  fontSize: "1.5em",
  zIndex: 1,
  fontWeight: 600,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.45em",
  },
}));
export const Header:FC = () => {
  return (
    <IntroductionContainer>
      {/* Portfolio of {Constants.USERNAME} */}
      <NavigationList />
    </IntroductionContainer>
  );
};
