import React, { useState } from "react";
import InsuranceForm from "./components/forms/InsuranceForm";
import SalesList from "./components/sales/SalesList";
import SalesChart from "./components/sales/SalesChart";
import "./App.css";

const App = () => {
  const [sales, setSales] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSaleSubmit = (sale) => {
    if (editIndex !== null) {
      const updatedSales = sales.map((item, index) =>
        index === editIndex ? sale : item
      );
      setSales(updatedSales);
      setEditIndex(null);
    } else {
      setSales([...sales, sale]);
    }
  };

  const handleSaleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSaleDelete = (index) => {
    const updatedSales = sales.filter((_, i) => i !== index);
    setSales(updatedSales);
  };

  return (
    <div className="app-container">
      <div className="top-section">
        <div className="form-container">
          <h2>Insurance Form</h2>
          <InsuranceForm
            onSubmit={handleSaleSubmit}
            initialData={editIndex !== null ? sales[editIndex] : null}
          />
        </div>
        <div className="chart-container">
          <h2>Insurance Sales Chart</h2>
          <SalesChart sales={sales} />
        </div>
      </div>
      <div className="bottom-section">
        <h2>Sales List</h2>
        <SalesList
          sales={sales}
          onEdit={handleSaleEdit}
          onDelete={handleSaleDelete}
        />
      </div>
    </div>
  );
};

export default App;
