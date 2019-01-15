import * as React from "react"
import Button from "@material-ui/core/Button"
import Collapse from "@material-ui/core/Collapse"
import NextIcon from "@material-ui/icons/NavigateNext"
import Typography from "@material-ui/core/Typography"

interface Props {
	open: boolean
	children: any

	onNext: () => void
}

export default class Explanation extends React.Component<Props> {
	render() {
		return (
			<Collapse in={this.props.open}>
				<React.Fragment>
					{this.props.children && (
						<Typography
							style={{
								marginBottom: 10,
							}}
							variant="body1"
						>
							{this.props.children}
						</Typography>
					)}

					<Button
						variant="contained"
						onClick={this.props.onNext}
					>
						Next
						<NextIcon style={{ marginRight: -10 }} />
					</Button>
				</React.Fragment>
			</Collapse>
		)
	}
}
