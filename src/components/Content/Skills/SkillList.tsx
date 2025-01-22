/* eslint-disable jsx-a11y/alt-text */
import { Box, styled } from "@mui/material";
import SoftSkill from "../../../assets/softSkills.png";
import HardSkill from "../../../assets/hardSkills.png";
import { StyleConstants } from "../../../styles/StyleConstants";
import { PropSKI } from "../../../utils/model";

const SkillListWrapper = styled(Box)(() => ({
  display: "flex",
  position: "relative",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "& .skillType": {
    width: "80%",
    height: "2rem",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid black",
    borderRadius: "5%",
    background: StyleConstants.SKILLS_BG,
  },
  "& .skillIcon": {
    height: 75,
    width: 75,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid black",
    borderRadius: "50%",
    position: "absolute",
    background: StyleConstants.SKILLS_BG,
    marginTop: 20,
    top: 23,
    "& img": {
      height: 58,
      width: 58,
    },
  },
  "& .skillsList": {
    display: "flex",
    flexDirection: "column",
    justifyContent: StyleConstants.SKILLS_BG,
    width: 300,
    height: 300,
    marginTop: 78,
    border: "1px solid black",
    background: "#bcd1e3",
    borderRadius: "5%",
    padding: 25,
    "& div": {
      padding: 5,
    },
  },
}));
export const SkillList = ({ type, skills }: PropSKI) => {
  return (
    <SkillListWrapper>
      <Box className="skillType bold">{`${
        type === "softSkills" ? "Soft Skills(Compétences Générales)" : "Hard Skills(Compétences Techniques)"
      } `}</Box>
      {/* <Box className="skillIcon">
        <img src={type === "softSkills" ? SoftSkill : HardSkill} />
      </Box> */}
      <Box className="skillsList">
        {skills.map((skill, ind) => (
          <div key={ind}>{`${ind + 1}) ${skill}`}</div>
        ))}
      </Box>
    </SkillListWrapper>
  );
};
