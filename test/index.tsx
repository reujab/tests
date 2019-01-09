import * as React from "react"
import AppBar from "../AppBar"
import ReactDOM from "react-dom"
import Typography from "@material-ui/core/Typography"
import tests from "../tests"
import { Test } from "../common"

interface Props {
	children: Test
}

export default class Index extends React.Component<Props> {
	render() {
		return (
			<React.Fragment>
				<AppBar>Test</AppBar>

				<div className="content">
					{this.props.children ? (
						"TODO"
					) : ((
						// https://github.com/Microsoft/TypeScript/issues/14494
						<div id="not-found">
							<Typography variant="display4">Test not found.</Typography>
						</div>
					))}
				</div>
			</React.Fragment >
		)
	}
}

addEventListener("DOMContentLoaded", () => {
	const test = tests.find((test) => test.id === location.hash.slice(1)) || null
	ReactDOM.render(<Index>{test}</Index>, document.querySelector("#root"))
})
