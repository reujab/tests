import * as React from "react"

interface Props {
	children: string
	correct?: boolean
}

export default class Answer extends React.Component<Props> {
	render() {
		return this.props.children
	}
}
