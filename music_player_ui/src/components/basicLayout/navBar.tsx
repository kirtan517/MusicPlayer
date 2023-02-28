import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import * as React from "react";

import { useNavigate } from "react-router";
import LogoSymbol from "../../images/LogoSymbol.png";
import LogoFull from "../../images/LogoFull.png";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Container, Grid } from "@material-ui/core";
import "./navbar.css";
import Profile from "./profile";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

export default function NavBar({ children }: any): JSX.Element {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);
	const navigate = useNavigate();

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleNavigation = (text: string) => {
		if (text == "Home")
			navigate("/")
		else if (text == "Favourites")
			navigate("/favourites")
		else if (text == "Search")
			navigate("/song")
	}

	const handleForward = () => { };
	const handleBackward = () => { };

	const styles = {
		background: "rgba(29, 26, 26, 0.76)",
		// borderRadius: "16px",
		boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
		backdropFilter: "blur(8.4px)",
		WebkitBackdropFilter: "blur(8.4px)",
		// border: "1px solid rgba(72, 68, 68, 1)",
	};

	return (
		<Box sx={{ display: "flex", background: "black" }}>
			<CssBaseline />
			<AppBar position="fixed" open={open} style={{ ...styles }}>
				<Toolbar>
					<IconButton
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{
							marginRight: 5,
							marginLeft: -2,
							padding: 0,
							...(open && { display: "none" }),
							color: "white",
						}}
					>
						<img src={LogoSymbol} alt="Logo" height={"50px"} width={"50px"} />
					</IconButton>
					<Grid container>
						<Grid
							item
							xs={8}
							sm={8}
							md={8}
							className="forwardBackwardContainer"
						>
							<IconButton onClick={handleForward}>
								<ChevronLeftIcon className="forwardBackwardButtons" />
							</IconButton>
							<IconButton onClick={handleBackward}>
								<ChevronRightIcon className="forwardBackwardButtons" />
							</IconButton>
						</Grid>
						<Grid item xs={4} sm={4} md={4} className="loginContainer">
							<Profile></Profile>
						</Grid>
					</Grid>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				open={open}
				PaperProps={{
					sx: {
						background: "rgba(0, 0, 0, 0.8)",
						// borderRadius: "16px",
						boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
						backdropFilter: "blur(8.4px)",
						WebkitBackdropFilter: "blur(8.4px)",
						// border: "1px solid rgba(72, 68, 68, 1)",
					},
				}}
			>
				<DrawerHeader>
					<div style={{ width: "100%", justifyContent: "center", alignItems: "center", display: "flex", marginTop: 2 }}>
						<img src={LogoFull} alt="Logo" height={"45px"} width={"125px"} />
					</div>

					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon style={{ color: "white" }} />
						) : (
							<ChevronLeftIcon style={{ color: "white" }} />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{["Home", "Favourites", "Search"].map((text, index) => (
						<ListItem key={text} disablePadding sx={{ display: "block" }} onClick={() => handleNavigation(text)}>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 3,
									color: "white"
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
										color: "white"
									}}
								>
									{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
								</ListItemIcon>
								<ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
				<List style={{ marginTop: `auto`}} >
					<ListItem>
						<Container style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}>
							<IconButton
								aria-label="open drawer"
								onClick={!open ? handleDrawerOpen : handleDrawerClose}
								edge="start"
								sx={{
									...(open && { display: "none" }),
									color: "white",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
								}}
								style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
								size="large"
							>
								{!open ? <ArrowForwardIosOutlinedIcon /> : <ArrowBackIosIcon />}
							</IconButton>
						</Container>
					</ListItem>
				</List>


			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 0, m: 0 }} maxWidth="100%">
				<DrawerHeader />
				{children}
			</Box>
		</Box>
	);
}
