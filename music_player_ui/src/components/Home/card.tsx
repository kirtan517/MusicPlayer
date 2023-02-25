import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@material-ui/core";
import TS from "../../images/TS.png";

export default function CustomCard() {
  console.log("Rendering");
  return (
    <Grid item>
      <Card
        sx={{ maxWidth: 200,":hover": { background: "red importan!" }  }}
        style={{
          background: "rgba(89, 73, 73, 0.39)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(9px)",
          WebkitBackdropFilter: "blur(9px)",
          border: "1px solid rgba(89, 73, 73, 0.08)",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={TS}
            alt="green iguana"
          />
          <CardContent
            style={{
              width: "100%",
              color: "white",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography
              variant="body2"
              style={{
                width: "100%",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "clip|string|ellipsis|initial|inherit",
              }}
            >
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
