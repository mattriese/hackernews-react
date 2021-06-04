import React from "react";


/** Story component:
 *
 * Props: {url, title}
 */
class Story extends React.Component {

	render() {
		return (
			<a href={this.props.url}>
				{this.props.title}
			</a>
		)
	}

}
export default Story;
