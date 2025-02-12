import { FC, useEffect } from "react";
import { Box } from "@mui/material";
import { SectionWrapper, TitleWrapper } from "../../../styles/sectionStyles";
import Certifications from "../../../data/Certifications.json";
import { Certification } from "./Certiication";


export const CertificationsContainer:FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <SectionWrapper>
      <TitleWrapper>LICENSES & CERTIFICATIONS</TitleWrapper>
      <Box>
        {Certifications.map((certficate) => (
          <Certification certficate={certficate} key={certficate.name} />
        ))}
      </Box>
    </SectionWrapper>
  );
};
