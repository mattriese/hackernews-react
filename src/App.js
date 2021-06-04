import React from "react";
import './App.css';
import StoryList from "./StoryList";

/** App to search HackerNews and display links to stories
 *
 * App -> StoryList
 */
class App extends React.Component {

  render() {
    return(
    <div className="App">
      <StoryList/>
    </div>
    )
  }
}

export default App;
