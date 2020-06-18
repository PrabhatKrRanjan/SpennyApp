import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import { connect } from "react-redux";

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          height: 300,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
      },
    };
  }

  render() {
    return this.props.isLoading ? (
      <div>{this.props.errorMessage}</div>
    ) : (
      <div id="chart">
        <ReactApexChart
          options={{
            ...this.state.options,
            labels: this.props.getData.data.labels,
          }}
          series={this.props.getData.data.datasets}
          type="area"
          height={350}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getData: state.data,
  isLoading: state.isLoading,
  errorMessage: state.errorMessage,
});

export default connect(mapStateToProps)(Graph);
