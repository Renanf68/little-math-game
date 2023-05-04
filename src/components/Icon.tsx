import styled from "styled-components";
import { ReactComponent as play } from "../images/play.svg";
import { ReactComponent as plus } from "../images/plus.svg";
import { IconType } from "../types";

export const PlayIcon = styled(play)`
  width: 24px;
  height: 24px;
  margin-bottom: -4.5px;
  margin-right: 8px;
`;

export const PlusIcon = styled(plus)`
  width: 24px;
  height: 24px;
  margin-bottom: -4.5px;
  margin-right: 8px;
`;

interface IconProps {
  icon: IconType;
}

export const Icon = ({ icon }: IconProps) => {
  if (icon === "play") return <PlayIcon />;
  if (icon === "plus") return <PlusIcon />;
  return <span />;
};
