import styled from "styled-components";

interface SwitchLayoutButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isGroup?: boolean;
}

const SwitchBtn = styled.button`
  margin-top: 16px;
  margin-right: 16px;
  width: 60px;
  min-width: 78px;
  height: 78px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.purple};
  border-radius: 39px;
  background: none;
  cursor: pointer;
`;

const Box = styled.div`
  width: 100%;
  height: 22px;
  border: 1px solid;
  border-color: ${(props) => props.theme.colors.purple};
  border-radius: 1000px;
`;

export const SwitchLayoutButton = ({
  isGroup,
  ...props
}: SwitchLayoutButtonProps) => {
  return (
    <SwitchBtn {...props}>
      <Box />
      {!isGroup && <Box />}
    </SwitchBtn>
  );
};
