import * as React from "react"
import Collapse from "@material-ui/core/Collapse"
import Explanation from "../Explanation"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormGroup from "@material-ui/core/FormGroup"
import FormLabel from "@material-ui/core/FormLabel"
import MuiCheckbox from "@material-ui/core/Checkbox"
import _ from "lodash"

interface Props {
	question: string
	ordered?: boolean
	answers: JSX.Element[]
	explanation: any

	onAnswer?: (string, boolean) => void
	onNext?: () => void
}

interface State {
	answers: Set<string>
	finalized: boolean
}

export default class CheckBox extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		this.state = {
			answers: new Set(),
			finalized: false,
		}
	}

	render() {
		return <React.Fragment>
			<FormControl fullWidth>
				<FormLabel focused={false}>{this.props.question}</FormLabel>

				<FormGroup>
					{this.props.answers.map((answer) => (
						<FormControlLabel
							key={answer.props.children}
							classes={{
								root: "answer",
								disabled: [
									"disabled",
									answer.props.correct ? "correct" : null,
									// this.state.answers === answer.props.children && !answer.props.correct ? "incorrect" : null,
								].filter(a => a).join(" "),
							}}
							disabled={this.state.finalized}
							value={answer.props.children}
							control={<MuiCheckbox />}
							label={answer}
							onChange={(e) => {
								if ((e.target as HTMLInputElement).checked) {
									this.state.answers.add(answer.props.children)
								} else {
									this.state.answers.delete(answer.props.children)
								}
							}}
						/>
					))}
				</FormGroup>
			</FormControl>

			<Explanation open={this.state.finalized}>{this.props.explanation}</Explanation>
		</React.Fragment>
	}
}
