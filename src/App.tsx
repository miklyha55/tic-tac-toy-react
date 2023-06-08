import React from "react";
import Grid from "./grid/Grid";
import config from "./configs/config.json";

export default class App extends React.Component {
  render() {
    return (
	    <div className="App">
            <Grid
                col = {config.grid.col}
                row = {config.grid.row}
                width = {config.grid.width}
                height = {config.grid.height}
            ></Grid>
      </div>
    );
  }
}

