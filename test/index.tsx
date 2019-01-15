import * as React from "react"
import AppBar from "../AppBar"
import Card from "@material-ui/core/Card"
import LinearProgress from "@material-ui/core/LinearProgress"
import ReactDOM from "react-dom"
import ScoreResults from "./ScoreResults"
import SwipeableViews from "react-swipeable-views"
import Typography from "@material-ui/core/Typography"
import _ from "lodash"
import tests from "../tests"
import { Test } from "../common"

interface Props {
	children: null | Test
}

interface State {
	index: number
	questions: JSX.Element[]

	correct: number
	incorrect: number
}

export default class Index extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		if (!props.children) {
			return
		}

		this.state = {
			index: 0,
			questions: _.shuffle(props.children.questions.map(this.fixQuestion.bind(this))).slice(0, 30),

			correct: 0,
			incorrect: 0,
		}
	}

	fixQuestion(question: JSX.Element, index: number): JSX.Element {
		// adds properties
		const props = Object.assign({
			key: index,

			onAnswer: (correct) => this.setState({
				correct: this.state.correct + (correct ? 1 : 0),
				incorrect: this.state.incorrect + (correct ? 0 : 1),
			}),
			onNext: () => this.setState({
				index: this.state.index + 1,
			})
		}, question.props)

		// shuffles answer choices
		if (!props.ordered) {
			props.answers = _.shuffle(props.answers)
		}

		return React.createElement(question.type, props)
	}

	render() {
		return (
			<React.Fragment>
				<AppBar>{this.props.children ? this.props.children.title : "Not Found"}</AppBar>

				<div className="content">
					{this.props.children ? (
						<SwipeableViews disabled index={this.state.index}>
							{this.state.questions.map((question, i) => (
								<React.Fragment key={i}>
									<Typography variant="title">
										Question {i + 1}/{this.state.questions.length}
									</Typography>

									<Card
										id="question"
										style={{
											padding: 20,
										}}
									>
										{question}
									</Card>

									<LinearProgress
										className="progress"
										variant="buffer"
										value={100 * this.state.correct / this.state.questions.length}
										valueBuffer={100 * (this.state.correct + this.state.incorrect) / this.state.questions.length}
									/>
								</React.Fragment>
							)).concat(
								<ScoreResults key="results" percent={Math.round(100 * this.state.correct / this.state.questions.length)} />
							)}
						</SwipeableViews>
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
