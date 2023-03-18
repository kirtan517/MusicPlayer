import {
	Box,
	Button,
	Grid,
	IconButton,
	InputBase,
	TextField,
	Avatar,
	Typography,
} from "@material-ui/core";
import "./SignIn.css";
import image from "../../images/auth.png";
import { LockOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import AuthBackground from "./AuthBackground";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			borderColor: "white",
		},
		"& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
			borderColor: "white",
		},
		"& .MuiInputLabel-outlined": {
			color: "white",
		},
	},
}));

export default function SignIn() {
	const classes = useStyles();
	return (
		<AuthBackground>
			<div className="form-container">
				<Grid container justifyContent="center" alignItems="center"  className="Grid-container">
					<Grid item xs={12} style= {{justifyContent : "center", display : "flex"}}>
						<Avatar style = {{justifyContent : "center"}}>
							<LockOutlined />
						</Avatar>
					</Grid>
					<Grid item xs={12} style= {{justifyContent : "center", display : "flex"}}>
						<Typography variant="h5" style = {{marginTop : "-20px"}}>Sign In</Typography>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="email"
							label="Email Address"
							variant="outlined"
							fullWidth
							InputLabelProps={{
								style: { color: "white" },
							}}
							inputProps={{
								style: { color: "white" },
							}}
							className={classes.root}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							id="password"
							label="Password"
							variant="outlined"
							fullWidth
							InputLabelProps={{
								style: { color: "white" },
							}}
							inputProps={{
								style: { color: "white" },
							}}
							className={classes.root}
						/>
					</Grid>
					<Grid item xs={12} style = {{marginTop : "10px"}}>
						<Button type="submit" fullWidth variant="contained" color="primary">
							Google Sing In
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Button type="submit" fullWidth variant="contained" color="primary">
							Sign In
						</Button>
					</Grid>
				</Grid>
			</div>
        </AuthBackground>
	);
}
