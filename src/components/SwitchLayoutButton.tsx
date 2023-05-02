import styled from "styled-components";

interface SwitchLayoutButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isGroup?: boolean;
}

const SwitchBtn = styled.button`
  margin-top: 16px;
  width: 32px;
  height: 26px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: white;
  cursor: pointer;
`;

const Box = styled.div`
  width: 50%;
  height: 6px;
  background-color: black;
`;

export const SwitchLayoutButton = ({
  isGroup,
  ...props
}: SwitchLayoutButtonProps) => {
  return (
    <SwitchBtn {...props}>
      <Box />
      <Box style={isGroup ? {} : { marginLeft: "4px" }} />
    </SwitchBtn>
  );
};
