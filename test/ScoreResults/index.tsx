import * as React from "react"
import DepressedFace from "@material-ui/icons/SentimentVeryDissatisfied"
import HappyFace from "@material-ui/icons/SentimentVerySatisfied"
import SadFace from "@material-ui/icons/SentimentDissatisfied"
import SmilingFace from "@material-ui/icons/SentimentSatisfied"
import Typography from "@material-ui/core/Typography"

interface Props {
	percent: number
}

export default class ScoreResults extends React.Component<Props> {
	render() {
		return <React.Fragment>
			<Typography
				style={{
					textAlign: "center",
				}}
				variant="display4"
			>
				{this.props.percent >= 80 ? (
					<HappyFace fontSize="inherit" />
				) : this.props.percent >= 70 ? (
					<SmilingFace fontSize="inherit" />
				) : this.props.percent >= 60 ? (
					<SadFace fontSize="inherit" />
				) : ((
					<DepressedFace fontSize="inherit" />
				))}
				<br />
				{this.props.percent}%
			</Typography>
		</React.Fragment>
	}
}
