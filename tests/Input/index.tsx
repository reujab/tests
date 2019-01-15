import * as React from "react"
import Button from "@material-ui/core/Button"
import Collapse from "@material-ui/core/Collapse"
import Explanation from "../Explanation"
import FormControl from "@material-ui/core/FormControl"
import FormLabel from "@material-ui/core/FormLabel"
import TextField from "@material-ui/core/TextField"

interface Props {
	question: any
	answer: any
	explanation: any

	onAnswer?: (boolean) => void
	onNext?: () => void
}

interface State {
	answer: any
	finalized: boolean
}

export default class Input extends React.Component<Props, State> {
	constructor(props) {
		super(props)

		this.state = {
			answer: null,
			finalized: false,
		}
	}

	render() {
		return <React.Fragment>
			<FormControl style={{ marginBottom: 20 }} fullWidth>
				<FormLabel focused={false}>{this.props.question}</FormLabel>

				<TextField
					InputProps={{
						classes: {
							root: "answer",
							disabled: [
								"disabled",
								this.state.answer == this.props.answer ? "correct" : null,
							].filter(Boolean).join(" "),
						}
					}}
					disabled={this.state.finalized}
					error={this.state.finalized}
					onChange={(e) => {
						this.setState({ answer: (e.target as HTMLInputElement).value })
					}}
				/>
			</FormControl>

			<Collapse in={!this.state.finalized}>
				<Button
					disabled={this.state.finalized || !this.state.answer}
					variant="contained"
					onClick={() => {
						this.setState({ finalized: true })
						this.props.onAnswer(this.state.answer == this.props.answer)
					}}
				>
					Submit
				</Button>
			</Collapse>

			<Explanation
				open={this.state.finalized}
				onNext={this.props.onNext}
			>
				{this.props.explanation}
			</Explanation>
		</React.Fragment >
	}
}
