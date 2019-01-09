import * as React from "react"
import ComputerIcon from "@material-ui/icons/Computer"
import MuiAppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

interface Props {
	children: string
}

export default class AppBar extends React.Component<Props> {
	render() {
		return (
			<MuiAppBar position="static">
				<Toolbar>
					<ComputerIcon
						style={{
							marginRight: 20
						}}
					/>

					<Typography variant="title" color="inherit">{this.props.children}</Typography>
				</Toolbar>
			</MuiAppBar>
		)
	}
}
