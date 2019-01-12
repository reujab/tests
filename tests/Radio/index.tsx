import * as React from "react"
import Explanation from "../Explanation"
import FormControl from "@material-ui/core/FormControl"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormLabel from "@material-ui/core/FormLabel"
import MuiRadio from "@material-ui/core/Radio"
import RadioGroup from "@material-ui/core/RadioGroup"

interface Props {
	question: string
	ordered?: boolean
	answers: JSX.Element[]
	explanation?: any

	onAnswer?: (boolean) => void
	onNext?: () => void
}

interface State {
	answer: null | string
}

export default class Radio extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		this.state = {
			answer: null,
		}
	}

	render() {
		return <React.Fragment>
			<FormControl fullWidth>
				<FormLabel focused={false}>{this.props.question}</FormLabel>

				<RadioGroup
					value={this.state.answer}
					onChange={(e, answer) => {
						this.setState({ answer })
						this.props.onAnswer(answer === this.props.answers.find((answer) => answer.props.correct).props.children)
					}}
				>
					{this.props.answers.map((answer) => (
						<FormControlLabel
							key={answer.props.children}
							classes={{
								root: "answer",
								disabled: [
									"disabled",
									answer.props.correct ? "correct" : null,
									this.state.answer === answer.props.children && !answer.props.correct ? "incorrect" : null,
								].filter(a => a).join(" "),
							}}
							disabled={!!this.state.answer}
							value={answer.props.children}
							control={<MuiRadio />}
							label={answer}
						/>
					))}
				</RadioGroup>
			</FormControl>

			<Explanation open={!!this.state.answer} onNext={this.props.onNext}>{this.props.explanation}</Explanation>
		</React.Fragment>
	}
}
