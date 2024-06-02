import React from "react";
import PropTypes from "prop-types";
import PieChartGraph from "../charts/PieChart";
import { generateColors } from "../../utils/colorUtils";
import "./SalesChart.css";
import NoDataPlaceholder from "../common/NoDataPlaceholder";

const SalesChart = ({ sales }) => {
  const getProductCount = (sales) => {
    return sales.reduce((acc, sale) => {
      acc[sale.product] = (acc[sale.product] || 0) + 1;
      return acc;
    }, {});
  };

  const productCount = getProductCount(sales);

  const data = Object.keys(productCount).map((key) => ({
    name: key,
    value: productCount[key],
  }));

  const COLORS = generateColors(data.length);

  return (
    <div className="sales-chart-container">
      {sales.length === 0 ? (
        <NoDataPlaceholder message={"Data not available for visualization"} />
      ) : (
        <PieChartGraph data={data} colors={COLORS} />
      )}
    </div>
  );
};

SalesChart.propTypes = {
  sales: PropTypes.array.isRequired,
};

export default SalesChart;
