import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Container from "@mui/material/Container";
import AccessibleIcon from "@mui/icons-material/Accessible";
import AddIcon from "@mui/icons-material/Add";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import { makeStyles } from "@mui/styles";

// MUI Roboto Fonts
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

// const style = makeStyles({
// 	btn: {
// 		fontSize: 60,
// 		backgroundColor: "green",
// 	},
// });

const App = () => {
	// const classes = useStyles();

	return (
		<Container>
			{/* <Typography variant="h1" color="primary" align="center">
				Hello
			</Typography> */}
			<Typography variant="h6" color="textSecondary" component="h2" gutterBottom>
				Create new stuff
			</Typography>
			<Typography color="secondary">
				Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet consectetur,
				adipisicing elit. Dolores explicabo tempore deserunt reiciendis. Accusamus inventore
				placeat quae voluptatibus nihil fugit impedit at quasi dignissimos nobis ab sit,
				adipisci quis quia.
			</Typography>
			<Button type="submit" color="primary">
				Submit
			</Button>
			<Button type="submit" variant="outlined" color="secondary">
				Submit
			</Button>
			<br></br>
			<ButtonGroup color="primary" variant="contained">
				<Button>home</Button>
				<Button>about</Button>
				<Button>project</Button>
				<Button>contact</Button>
			</ButtonGroup>
			<br></br>
			<Button
				type="submit"
				color="secondary"
				variant="contained"
				onClick={() => console.log("you clicked me")}
				startIcon={<AddIcon />}
				endIcon={<AddReactionIcon />}
			>
				Submit
			</Button>
			<br></br>
			<br></br>
			<AccessibleIcon color="primary" fontSize="large" />
			<AccessibleIcon color="action" fontSize="large" />
			<AccessibleIcon color="error" fontSize="small" />
			<AccessibleIcon color="disabled" fontSize="large" />
			<AccessibleIcon color="secondary" fontSize="small" />
			<br></br>
			<br></br>
			<Button
				sx={{ background: "green" }}
				type="submit"
				color="secondary"
				variant="contained"
				onClick={() => console.log("you clicked me")}
				startIcon={<AddIcon />}
				endIcon={<AddReactionIcon />}
			></Button>
		</Container>
	);
};

export default App;
