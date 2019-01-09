import * as React from "react"
import AppBar from "@material-ui/core/AppBar"
import ClassIcon from "@material-ui/icons/Class"
import ComputerIcon from "@material-ui/icons/Computer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ReactDOM from "react-dom"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import tests from "./tests"

interface Test {
	id: string
	title: string
	questions: number
}

export default class Index extends React.Component {
	render() {
		return <React.Fragment>
			<AppBar position="static">
				<Toolbar>
					<ComputerIcon
						style={{
							marginRight: 20
						}}
					/>

					<Typography variant="title" color="inherit">Cybersecurity Tests</Typography>
				</Toolbar>
			</AppBar>

			<div className="content">
				<List>
					{tests.map((test: Test) => (
						<ListItem
							key={test.id}
							button
							onClick={() => location.href = `test.html#${test.id}`}
						>
							<ListItemIcon>
								<ClassIcon />
							</ListItemIcon>
							<ListItemText secondary={`${test.questions} questions`}>{test.title}</ListItemText>
						</ListItem>
					))}
				</List>
			</div>
		</React.Fragment>
	}
}

addEventListener("DOMContentLoaded", () => {
	ReactDOM.render(<Index />, document.querySelector("#root"))
})
