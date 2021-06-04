import React from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: this.props.searchTerm };
  }
  

  handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("SearchTerm is --->", this.searchTerm);
    console.log("this is", this);
    this.props.search(this.searchTerm);
  }

  handleChange = (evt) => {
    console.log("search value is --->", this.state.searchTerm)
    this.setState({ searchTerm: evt.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name="search-term"
          type="text"
          value={this.state.searchTerm} 
          onChange={this.handleChange}
          placeholder="Search for stories"
          />
        <button>
          Search!
        </button>
      </form>
    )
  }
}

export default SearchForm;