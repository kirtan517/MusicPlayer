import { Box } from "@material-ui/core";
import image from "../../images/auth.png";
import "./AuthBackground.css"

export default function AuthBackground(props : any) {
	return (
		<Box className="container">
			<picture className="image-container">
				<source srcSet={image} media="(min-width: 801w)" />
				<img src={image} className="image-container" alt="My Image"  />
			</picture>
            {props.children}
		</Box>
	);
}
