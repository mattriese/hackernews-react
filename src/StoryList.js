import React from "react";
import Story from './Story';
import SearchForm from './SearchForm';
import axios from 'axios'

class StoryList extends React.Component {

	BASE_URL = "https://hn.algolia.com/api/v1/search?query=";
	state = { hits: [], searchTerm: "react"};



	async getStoriesFromApi(searchTerm){
		let res = await axios(`${this.BASE_URL}${searchTerm}`);
		this.setState({ hits: res.data.hits })
	}

	async componentDidMount(){
		this.getStoriesFromApi(this.state.searchTerm);
	}

	async componentDidUpdate(){
		this.getStoriesFromApi(this.state.searchTerm);
	}

	search = (searchTerm) => {
		this.setState({searchTerm: searchTerm})
	}

  render() {
		return(
			<div className="StoryList">
			<SearchForm searchTerm={this.state.searchTerm} search={this.search}/>
			{this.state.hits.map( h => <Story key={h.objectID} title={h.title}/>)}
			</div>
		)
	}
}
export default StoryList;
