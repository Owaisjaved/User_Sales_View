import React from "react";
import { PieChart, Pie, Tooltip, Cell, Legend } from "recharts";
import PropTypes from "prop-types";
import "./PieChart.css";

const PieChartGraph = ({ data, colors }) => {
  return (
    <PieChart width={500} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((_entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend layout="vertical" align="right" verticalAlign="middle" />
    </PieChart>
  );
};

PieChartGraph.propTypes = {
  data: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};

export default PieChartGraph;
