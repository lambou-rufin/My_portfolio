import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import "./About.css"
// const saryko = require("../../../assets/saryko.png");
import saryko from "../../../assets/saryko.png";


export const AboutMe: FC = () => {
  const StyledBox = styled(Box)(({ theme }) => ({
    width: "85%",
    margin: "0 auto",
    display: "flex",
    flex: 1,
    marginTop: 84,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      width: "92%",
    },
  }));

  const StyledH1 = styled("h1")(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "1.2rem",
    textAlign: "start",
    marginBottom: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  }));

// const LogoSidenav = styled(Box)(({theme}) => ({
//   width: "80",
//   maxWidth: "100%"
// }))

  return (
    <StyledBox>
      <Box className="logoSidenav">
        <img src={saryko} alt="Logo" className="img-fluid" />
      </Box>
      <StyledH1>
        Développeur junior passionné par la création d'applications web
        interactives et performantes. Compétent en Reactjs, Node.js avec une
        solide expérience dans le développement de projets en équipe et la
        gestion des besoins des utilisateurs.
      </StyledH1>
    </StyledBox>
  );
};
