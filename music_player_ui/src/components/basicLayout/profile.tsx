import * as React from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import TS from "../../images/TS.png";
import { Avatar } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { login, logout } from "../../store/user";
import "./profile.css";

export default function Profile() {
	const styles = {
		color: "white",
		fontSize: "large",
		transform: "scale(0.85)",
		marginRight: "30px",
		marginLeft: "30px",
		background: "rgba(255, 255, 255, 0.13)",
		borderRadius: "16px",
		boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
		backdropFilter: "blur(6.1px)",
		WebkitBackdropFilter: "blur(6.1px)",
		"&:hover": {
			background: "rgba(255, 255, 255, 0.3)",
			borderRadius: "16px",
			boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
			backdropFilter: "blur(7.9px)",
			WebkitBackdropFilter: "blur(7.9px)",
			border: "1px solid rgba(255, 255, 255, 1)",
		},
	};
	const dispatch = useDispatch();
	const isUserLogedIn = useSelector(
		(state: RootState) => state.user.isUserLogedIn
	);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const handleSignUp = () => {};
	return (
		<React.Fragment>
			<Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
				{isUserLogedIn && (
					<Button
						variant="contained"
						onClick={() => handleSignUp()}
						style={{...styles,marginRight : "0px"}}
					>
						Sign Up
					</Button>
				)}
				{isUserLogedIn ? (
					<Button
						variant="contained"
						style={styles}
						onClick={() => dispatch(logout())}
					>
						Log In
					</Button>
				) : (
					<Button
						variant="contained"
						style={{...styles,marginRight : "5px"}}
						onClick={() => dispatch(login())}
					>
						Log Out
					</Button>
				)}
				<Tooltip title="Account settings">
					<IconButton
						onClick={handleClick}
						size="small"
						sx={{ ml: 2 }}
						aria-controls={open ? "account-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
					>
						{!isUserLogedIn && (
							<Avatar
								size={{ xs: 40, sm: 40, md: 40, lg: 40, xl: 40, xxl: 40 }}
								icon={<AntDesignOutlined />}
								src={TS}
								style={{ marginRight : "30px" }}
							/>
						)}
					</IconButton>
				</Tooltip>
			</Box>
			<Menu
				anchorEl={anchorEl}
				id="account-menu"
				open={open}
				onClose={handleClose}
				onClick={handleClose}
				PaperProps={{
					elevation: 0,
					sx: {
						overflow: "visible",
						filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
						mt: 1.5,
						"& .MuiAvatar-root": {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1,
						},
						"&:before": {
							content: '""',
							display: "block",
							position: "absolute",
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: "background.paper",
							transform: "translateY(-50%) rotate(45deg)",
							zIndex: 0,
						},
					},
				}}
				transformOrigin={{ horizontal: "right", vertical: "top" }}
				anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
			>
				<MenuItem onClick={handleClose}>
					<Avatar /> Profile
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<Avatar /> My account
				</MenuItem>
				<Divider />
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<PersonAdd fontSize="small" />
					</ListItemIcon>
					Add another account
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<Settings fontSize="small" />
					</ListItemIcon>
					Settings
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<ListItemIcon>
						<Logout fontSize="small" />
					</ListItemIcon>
					Logout
				</MenuItem>
			</Menu>
		</React.Fragment>
	);
}
