import React from "react";
import Story from './Story';
import axios from 'axios'

class StoryList extends React.Component {

	BASE_URL = "https://hn.algolia.com/api/v1/search?query=";
	state = { hits: []};



	async getStoriesFromApi(searchTerm){
		let res = await axios(`${this.BASE_URL}${searchTerm}`);
		this.setState({ hits: res.data.hits })
	}

	async componentDidMount(){
		this.getStoriesFromApi("react");
	}

  render() {
		return(
			<div>
			{this.state.hits.map( h => <Story title={h.title}/>)}
			</div>
		)
	}
}
export default StoryList;
