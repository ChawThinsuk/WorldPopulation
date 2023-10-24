import React, { useState, useEffect } from "react";
import "./App.css";
import PopulationChart from "./component/PopulationChart";
import { Chart } from "react-google-charts";

export function App() {
  return (
    <>
      <PopulationChart />
      <Chart
        chartType="ScatterChart"
        data={[
          ["Age", "Weight"],
          [4, 5.5],
          [8, 12],
        ]}
        width="100%"
        height="400px"
        legendToggle
      />
    </>
  );
}
export default App;
