import styled from "styled-components";
import { ReactComponent as play } from "../images/play.svg";
import { ReactComponent as plus } from "../images/plus.svg";
import { ReactComponent as back } from "../images/back.svg";
import { ReactComponent as settings } from "../images/settings.svg";
import { ReactComponent as flash } from "../images/flash.svg";
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
export const BackIcon = styled(back)`
  width: 24px;
  height: 24px;
`;
export const SettingsIcon = styled(settings)`
  width: 24px;
  height: 24px;
`;
export const FlashIcon = styled(flash)`
  width: 24px;
  height: 24px;
`;

interface IconProps {
  as: IconType;
}

export const Icon = ({ as }: IconProps) => {
  if (as === "play") return <PlayIcon />;
  if (as === "plus") return <PlusIcon />;
  if (as === "back") return <BackIcon />;
  if (as === "settings") return <SettingsIcon />;
  if (as === "flash") return <FlashIcon />;
  return <span />;
};
