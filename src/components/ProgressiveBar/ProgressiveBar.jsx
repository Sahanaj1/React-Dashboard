import React from "react";
import styled, { keyframes } from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircleContainer = styled.div`
  width: 120px;
  height: 120px;
  position: relative;
`;

const fill = keyframes`
  0% {
    stroke-dashoffset: 150;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const CircleProgress = styled(CircularProgressbar)`
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(-90deg);
  path {
    stroke: #8575E7;
    stroke-linecap: round;
    animation: ${fill} 1s linear;
  }
`;

const Percentage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  color: #8575E7;
  transform: ${({ percentage }) => `rotate(${percentage * 0}deg)`};
  transition: transform 1s linear;
`;

const ProgressBar = ({ percentage }) => {
  return (
    <CircleContainer>
      <CircleProgress
        value={percentage}
        strokeWidth={10}
        styles={buildStyles({
          strokeLinecap: "round",
          pathColor: "#8575E7",
          trailColor: "#f2f2f2",
        })}
      />
      <Percentage percentage={percentage}>{percentage}</Percentage>
    </CircleContainer>
  );
};

export default ProgressBar;
