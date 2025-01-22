import { Box, styled } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../store/types";
import { sectionImages } from "../utils";
import { setCurrentSection } from "./slice";
import Arrow from "../../../assets/arrow.png";
import { StyleConstants } from "../../../styles/StyleConstants";
import { useNavigationSize } from "../../../hooks/useNavigationSize";

const NavigationWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "end",
  // backgroundColor: StyleConstants.NAVIGATION_BG,
  padding: "20px 20px 20px 20px",
  borderRadius:12,
  position: "sticky",
  width: "100%",
  zIndex: 1,
  top: 84,
  "& .nav-section": {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  "& .section-name": {
    width: 84,
    fontSize: 13,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 10,
    color: "white"
  },
  "& .nav-item": {
    height: 20,
    width: 20,
    padding: 10,
    borderWidth: 2,
    // borderStyle: "solid",
    borderColor: StyleConstants.SECTION_BORDER,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      height: 30,
      width: 30,
    },
  },
  "& .arrow": {
    margin: "10px 0 0 ",
    height: 70,
    width: 84,
    padding: 5,
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transform: "rotate(271deg)",
    "& img": {
      height: 50,
      width: 50,
    },
  },
  "& .before": {
    transform: "rotate(90deg)",
  },
  "& .disabled": {
    opacity: "0.1",
    pointerEvents: "none",
  },
  "& .active .nav-item": {
    backgroundColor: StyleConstants.ACTIVE_SECTION,
  },
  "& .active .section-name": {
    backgroundColor: StyleConstants.ACTIVE_SECTION,
  },
  [theme.breakpoints.down("md")]: {
    padding: 8,
    justifyContent: "center",
    "& .nav-section": {
      padding: "0 3px",
    },
  },
}));
export const NavigationList = () => {
  const dispatch = useDispatch();
  const sections =
    useSelector((state: IRootState) => state.sections?.sections) || [];
  const selectedSection =
    useSelector((state: IRootState) => state.sections?.currentSection) || "";
  const filteredSections = sections.filter((sec) => !sec?.hide);
  const [start, setStart] = useState(0);
  const limit = useNavigationSize();
  return (
    <NavigationWrapper>
      {limit < filteredSections.length && (
        <Box
          className={`arrow before ${start === 0 && "disabled"}`}
          onClick={() => setStart((val) => val - 1)}
        >
          <img src={Arrow} />
        </Box>
      )}
      {filteredSections.slice(start, start + limit).map((sec) => (
        <Box
          key={sec.key}
          className={`nav-section ${selectedSection === sec.key && "active"}`}
        >
          <Box
            className="nav-item"
            onClick={() => dispatch(setCurrentSection(sec.key))}
          >
            <img src={sectionImages[sec.key]} alt={sec.key} />
          </Box>
          <div className="section-name">{sec.name}</div>
        </Box>
      ))}
      {limit < filteredSections.length && (
        <Box
          className={`arrow after ${
            start === filteredSections.length - limit && "disabled"
          }`}
          onClick={() => setStart((val) => val + 1)}
        >
          <img src={Arrow} />
        </Box>
      )}
    </NavigationWrapper>
  );
};
