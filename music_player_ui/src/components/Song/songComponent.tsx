import {
	AntDesignOutlined,
	HeartFilled,
	HeartOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Image, Space } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";
import { useState } from "react";
import { Container, Typography, Grid, IconButton } from "@material-ui/core";
import TS from "../../images/TS.png";
import "./songComponent.css";
import CustomizedTables from "./Table";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import NameUiComponent from "./nameUiComponenet";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const SongComponent = () => {
	const [size, setSize] = useState<SizeType>("large");
	const [wishlist, setWishlist] = useState(false);
	const [like, setLike] = useState(false);
	const [play, setPlay] = useState(false);

	const darkTheme = createTheme({
		palette: {
			mode: "dark",
		},
	});

	const SongDescription = (
			<Grid container className="songDescription">
				<Grid item xs={12} sm={12} className="songButton-grid">
					<Space size="large" className="songDescription-space">
						<IconButton
							aria-label="like"
							className="songDescription-button"
							color="inherit"
							onClick={() => setPlay(!play)}
						>
							{play ? (
								<PlayArrowIcon className="songIcon" />
							) : (
								<PauseIcon className="songIcon" />
							)}
						</IconButton>

						<IconButton
							aria-label="like"
							className="songDescription-button"
							color="inherit"
							onClick={() => setWishlist(!wishlist)}
						>
							{wishlist ? (
								<FavoriteIcon className="songIcon" />
							) : (
								<FavoriteBorderOutlinedIcon className="songIcon" />
							)}
						</IconButton>

						<IconButton
							aria-label="like"
							className="songDescription-button"
							color="inherit"
							onClick={() => setLike(!like)}
						>
							{like ? (
								<ThumbUpIcon className="songIcon" />
							) : (
								<ThumbUpOutlinedIcon className="songIcon" />
							)}
						</IconButton>
					</Space>
				</Grid>
				<Grid container xl={12} xs={12} className="songArtistContainer">
					<Grid item>
						<Avatar
							size={{ xs: 24, sm: 24, md: 32, lg: 40, xl: 64, xxl: 80 }}
							icon={<AntDesignOutlined />}
							src={TS}
							style={{ margin: "0px 0px" }}
						/>
					</Grid>
					<Grid item className="songArtistTags">
							<NameUiComponent
								typeName="Artist"
								typeVariant="subtitle2"
								typeFontWeight="light"
								name="Taylor Swift"
								nameFontWeight="bolder"
								top="5px"
								nameVariant="subtitle1"
							/>
					</Grid>
				</Grid>
			</Grid>
	);

	return (
		<Container
			maxWidth="xl"
			style={{ margin: "0px 0px", padding: "0px 0px", width: "100%" }}
		>
			<Grid container component="main" className="songImage-container">
				<Image
					width={200}
					height={200}
					src={TS}
					preview={false}
					className="songImage"
				/>
				<Grid item className="songImageDiscription">
					<NameUiComponent
						typeName="Song"
						typeVariant="subtitle1"
						typeFontWeight="bold"
						name="Anti Hero"
						nameFontWeight="bolder"
						top="15px"
						nameVariant="h1"
					/>
				</Grid>
			</Grid>
			<Container className="songDescriptionTableContainer" maxWidth="xl">
				{SongDescription}

				<Container className="songTableHeading" maxWidth="xl">
					<NameUiComponent
						typeName="Popular songs By"
						typeVariant="subtitle1"
						typeFontWeight="lighter"
						name="Tyalor Swift"
						nameFontWeight="bold"
						top="5px"
						nameVariant="h4"
					/>
				</Container>

				<ThemeProvider theme={darkTheme}>
					<CssBaseline />
					<CustomizedTables />
				</ThemeProvider>
			</Container>
		</Container>
	);
};

export default SongComponent;
