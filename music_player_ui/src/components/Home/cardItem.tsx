import { Grid } from "@material-ui/core";
import CustomCard from "./card";

const CardItem = () => {
  return (
    <>
    <Grid container spacing={5} justifyContent="space-evenly" >
      <CustomCard></CustomCard>
      <CustomCard></CustomCard>
      <CustomCard></CustomCard>
      <CustomCard></CustomCard>
      <CustomCard></CustomCard>
      <CustomCard></CustomCard>
    </Grid>
    </>
  );
};

export default CardItem;
