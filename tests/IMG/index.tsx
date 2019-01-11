import * as React from "react"
import Tooltip from "@material-ui/core/Tooltip"

interface Props {
	src: string
	children: any
}

export default class IMG extends React.Component<Props> {
	render() {
		return (
			<Tooltip disableFocusListener title={<img src={this.props.src} />}>
				<span
					style={{
						cursor: "help",
						textDecoration: "underline dotted",
					}}
				>
					{this.props.children}
				</span>
			</Tooltip >
		)
	}
}
