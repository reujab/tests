import * as React from "react"
import AppBar from "./AppBar"
import ClassIcon from "@material-ui/icons/Class"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ReactDOM from "react-dom"
import tests from "./tests"
import { Test } from "./common"

export default class Index extends React.Component {
	render() {
		return <React.Fragment>
			<AppBar>Cybersecurity Tests</AppBar>

			<div className="content">
				<List>
					{tests.map((test: Test) => (
						<ListItem
							key={test.id}
							button
							onClick={() => location.href = `test/#${test.id}`}
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
