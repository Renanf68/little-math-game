import { PageLayout } from "../components/PageLayout";
// import { useUserContext } from "../context";
import { useTheme } from "styled-components";
import { Heading } from "../components/Heading";

const Settings = () => {
  // context
  const theme = useTheme();
  // const { user } = useUserContext();
  // UI
  return (
    <PageLayout backgroundColor={theme.colors.lighterPurple}>
      <Heading>Configurações</Heading>
    </PageLayout>
  );
};

export default Settings;
