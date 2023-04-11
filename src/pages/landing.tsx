import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { PageLayout } from "../components/PageLayout";

const Landing = () => {
  return (
    <PageLayout>
      <div>
        <h1>Jogo da Matemática</h1>
        <Link to="/app">
          <Button>Começar</Button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default Landing;
