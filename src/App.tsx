import React from "react";
import Grid from "./components/Grid";
import config from "./configs/config.json";
import Title from "./components/Title";

export default class App extends React.Component {
  render() {
    return (
	    <div className="App">
            <Title></Title>
            <Grid
                col = {config.grid.col}
                row = {config.grid.row}
                width = {config.grid.width}
                height = {config.grid.height}
            ></Grid>
      </div>
    );
  };
}

