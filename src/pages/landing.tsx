import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { PageLayout } from "../components/PageLayout";
import logo from "../images/logo.png";

const Landing = () => {
  return (
    <PageLayout>
      <div>
        <img src={logo} alt="game logo" width="100%" />
        <Link to="/app">
          <Button>Começar</Button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default Landing;
