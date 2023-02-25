import {
  AntDesignOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Image, Space } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { useState } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import TS from "../../images/TS.png";
import "./songComponent.css";
import CustomizedTables from "./Table";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';


const SongComponent = () => {
  const [size, setSize] = useState<SizeType>("large");

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const SongDescription = (
    <Container
      component="main"
      maxWidth="xl"
      style={{
        background: "rgba(0, 0, 0, 0.0)",
        boxShadow: "0 0px 30px rgba(0, 0, 0, 0.1)",
        borderTop: "1px solid rgba(0, 0, 0, 0.39)",
        padding: "0",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          style={{ padding: "0px 0px", margin: "0px 0px" }}
        >
          <Space size="large" style={{ padding: "1em" }}>
            <Button
              type="primary"
              shape="circle"
              block={true}
              icon={<PlayCircleOutlinedIcon style={{ fontSize: "inherit" }} />}
              size={size}
              ghost={true}
              style={{
                margin: "0px 10px",
                fontSize: "3em",
                width: "fit-content",
                height: "fit-content",
                border: "rgba(0,0,0, 0.0)",
                borderRadius: "50%",
              }}
            />

            <Button
              type="primary"
              shape="circle"
              icon={<FavoriteBorderOutlinedIcon style={{ fontSize: "inherit" }} />}
              size={size}
              ghost={true}
              style={{
                margin: 0,
                fontSize: "3em",
                width: "fit-content",
                height: "fit-content",
                border: "rgba(0,0,0, 0.0)",
                borderRadius: "50%",
              }}
            />
            {false && (
              <Button
                type="primary"
                shape="circle"
                icon={<HeartOutlined style={{ fontSize: "inherit" }} />}
                size={size}
              />
            )}
            <Button
              type="primary"
              shape="round"
              icon={<ThumbUpOutlinedIcon style={{ fontSize: "inherit" }} />}
              size={size}
              ghost={true}
              style={{
                margin: 0,
                fontSize: "2.5em",
                width: "fit-content",
                height: "fit-content",
                border: "rgba(0,0,0, 0.0)",
                borderRadius: "50%",
              }}
            ></Button>
          </Space>
        </Grid>
        <Grid item xl={12} xs={12} style={{ display: "flex" }}>
          <Avatar
            size={{ xs: 24, sm: 24, md: 32, lg: 40, xl: 64, xxl: 80 }}
            icon={<AntDesignOutlined />}
            src={TS}
            style={{ margin: "10px 20px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <Typography
              variant="subtitle2"
              style={{ position: "relative", top: "5px", zIndex: "1rem" }}
            >
              Artist
            </Typography>
            <Typography variant="subtitle1" style={{ fontWeight: "bolder" }}>
              Taylor Swift
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );

  return (
    <Container maxWidth = "xl" style = {{margin : "0px 0px" ,padding : "0px 0px" , width : "100%" }} >
      <Container
        component="main"
        style={{
          backgroundImage: "linear-gradient(to bottom, #8dc6ff, #000000 90%)",
          margin: "0",
          height: "450px",
          zIndex: "-1px",
          padding: "30px 30px",
          display: "flex",
          position : "relative",
        }}
        maxWidth="xl"
      >
        <Image
          width={200}
          height={200}
          src={TS}
          preview={false}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px",
            borderRadius: "12px",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            fontWeight: "bold",
            padding: "10px 20px",
            height: "200px",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            style={{ position: "relative", top: "15px", zIndex: "1rem" }}
          >
            Song
          </Typography>
          <Typography
            variant="h1"
            className="nameOfSong"
            style={{ zIndex: "-1rem", fontWeight: "bolder" }}
          >
            Anti Hero
          </Typography>
        </div>
      </Container>
      <Container
        style={{
          zIndex: "1px",
          position: "relative",
          display : "inline-block",
          margin: "-10% 0px",
          padding: "0px 0px",
          backgroundImage: "linear-gradient(to bottom,#22313f , #000000 40%)",
          height: "85%",
          backdropFilter: "blur(7.6px)",
          WebkitBackdropFilter: "blur(11.6px)",
          width : "100%",
        }}
        maxWidth="xl"
      >
        {SongDescription}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "white",
            fontWeight: "bold",
            padding: "0px 20px",
            margin: "10px 10px",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="subtitle1"
            style={{
              position: "relative",
              top: "5px",
              zIndex: "1rem",
              fontWeight: "lighter",
            }}
          >
            Popular songs By
          </Typography>
          <Typography
            variant="h4"
            className="nameOfSong"
            style={{ zIndex: "-1rem", fontWeight: "bold" }}
          >
            Tyalor Swift
          </Typography>
        </div>

        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <CustomizedTables />
        </ThemeProvider>
      </Container>
    </Container>
  );
};

export default SongComponent;
