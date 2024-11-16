import { useEffect } from "react";
import { Box, styled, Button } from "@mui/material";
import { SectionWrapper, TitleWrapper } from "../../../styles/sectionStyles";
import { Project } from "./Project";
import projects from "../../../data/Projects.json";
import GitHubIcon from "@mui/icons-material/GitHub";

const GitHubLink = styled("a")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
  textDecoration: "none",
  fontSize: "16px",
  fontWeight: "bold",
});

export const ProjectsContainer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>
      <TitleWrapper>MES PROJETS</TitleWrapper>
      <Box>
        {projects.map((project, ind) => (
          <Project project={project} key={ind} />
        ))}
      </Box>
      <GitHubLink href="https://github.com/AsKing07" target="_blank" rel="noopener noreferrer">
        <Button variant="contained" color="primary" startIcon={<GitHubIcon />}>
          Pour plus de projets, visitez mon repository GitHub!
        </Button>
      </GitHubLink>
    </SectionWrapper>
  );
};
