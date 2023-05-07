import { PageLayout } from "../components/PageLayout";
import { useUserContext } from "../context";
import { Users } from "../components/users";
import { Dashboard } from "../components/dashborad";
import { useTheme } from "styled-components";

const Home = () => {
  // context
  const theme = useTheme();
  const { user } = useUserContext();
  // UI
  return (
    <PageLayout
      backgroundColor={!user ? theme.colors.lighterPurple : undefined}
    >
      {!user ? <Users /> : <Dashboard />}
    </PageLayout>
  );
};

export default Home;
