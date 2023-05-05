import { PageLayout } from "../components/PageLayout";
import { useUserContext } from "../context";
import { Users } from "../components/users";
import { Dashboard } from "../components/dashborad";

const Home = () => {
  // context
  const { user } = useUserContext();
  // UI
  return <PageLayout>{!user ? <Users /> : <Dashboard />}</PageLayout>;
};

export default Home;
