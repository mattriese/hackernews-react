import React from 'react';
import Story from './Story';
import SearchForm from './SearchForm';
import axios from 'axios';

/** StoryList component:
 *
 * State: hits (array)
 * 				searchTerm (string)
 * 				isLoading (boolean)
 *
 * App -> StoryList -> SearchForm
 * 									-> Story
 */
class StoryList extends React.Component {
  BASE_URL = 'https://hn.algolia.com/api/v1/search?query=';
  state = { hits: [], searchTerm: 'react', isLoading: true };

  async getStoriesFromApi(searchTerm) {
		// TODO: try catch
    let res = await axios(`${this.BASE_URL}${searchTerm}`);
    this.setState({ hits: res.data.hits, isLoading: false });
  }

  async componentDidMount() {
    this.getStoriesFromApi(this.state.searchTerm);
  }

  search = (searchTerm) => {
    this.setState({ searchTerm: searchTerm, isLoading: true });
		this.getStoriesFromApi(searchTerm);
  };

  render() {
		console.log("this.state: ", this.state)
    return (
      <div className="StoryList">
        <h1>HackerNews</h1>
        <SearchForm searchTerm={this.state.searchTerm} search={this.search} />
        {this.state.isLoading ? (
          <h4>Loading...</h4>
        ) : (
          <ul>
            {this.state.hits.map((h) => (
              <li key={h.objectID}>
                <Story title={h.title} url={h.url} />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default StoryList;
