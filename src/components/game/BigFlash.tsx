import styled from "styled-components";
import { ReactComponent as flashIcon } from "../../images/flash-purple.svg";

const FlashBox = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlashIcon = styled(flashIcon)`
  width: 240px;
  height: 240px;
  color: black;
  @keyframes flashScale {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(2.5);
    }
    100% {
      transform: scale(0);
    }
  }
  animation: 0.3s linear flashScale;
`;

export const BigFlash = () => {
  return (
    <FlashBox>
      <FlashIcon />
    </FlashBox>
  );
};
