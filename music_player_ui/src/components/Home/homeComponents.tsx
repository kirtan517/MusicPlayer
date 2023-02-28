import { Container } from "@material-ui/core";
import CardItem from "./cardItem";
import "./homeComponents.css"

const HomeComponent = () => {
  return (
    <Container
    className="homeComponentContainer"
    
      maxWidth="xl"
    >
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
      <CardItem />
    </Container>
  );
};

export default HomeComponent;
