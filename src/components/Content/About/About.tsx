import React, { FC, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import "./About.css";
import saryko from "../../../assets/saryko.png";

export const AboutMe: FC = () => {
  const [animatedText, setAnimatedText] = useState("");
  const fullText = "Hello Rufin";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setAnimatedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const StyledContainer = styled(Box)(({ theme }) => ({
    width: "85%",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 84,
    gap: "20px",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      width: "92%",
    },
  }));

  const ImageBox = styled(Box)(({ theme }) => ({
    flex: "0 0 auto",
    maxWidth: "150px",
    maxHeight: "150px", // Limite la hauteur pour un conteneur carré
    overflow: "hidden", // Masque le reste de l'image
    borderRadius: "50%", // Rend l'image circulaire
    position: "relative",
    img: {
      width: "100%",
      height: "auto",
      objectFit: "cover", // Adapte l'image à la taille du conteneur
      transform: "translateY(-10%)", // Ajuste le positionnement pour cadrer la personne
    },
  }));

  const TextBox = styled(Box)(({ theme }) => ({
    flex: "1",
    textAlign: "left",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  }));

  const StyledH1 = styled("h1")(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "1.2rem",
    lineHeight: "1.6",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.5rem",
    },
  }));

  const AnimatedText = styled("div")(({ theme }) => ({
    position: "absolute",
    top: "-40px",
    left: 0,
    width: "100%",
    textAlign: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  }));

  return (
    <StyledContainer>
      <TextBox>
        <AnimatedText>{animatedText}</AnimatedText>
        <StyledH1>
          Développeur junior passionné par la création d'applications web
          interactives et performantes. Compétent en Reactjs, Node.js avec une
          solide expérience dans le développement de projets en équipe et la
          gestion des besoins des utilisateurs.
        </StyledH1>
      </TextBox>
      <ImageBox>
        <img src={saryko} alt="Profil de Rufin" />
      </ImageBox>
    </StyledContainer>
  );
};
