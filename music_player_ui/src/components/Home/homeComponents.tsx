import { Container } from "@material-ui/core";
import CardItem from "./cardItem";

const HomeComponent = () => {
  return (
    <Container
      style={{
        background:
          "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 48%, rgba(66,65,65,1) 100%)",
        height: "100%",
        padding : "30px 30px",

      }}
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
