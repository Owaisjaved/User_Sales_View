import React from "react";
import PropTypes from "prop-types";
import SalesItem from "../lists/SalesItem";
import NoDataPlaceholder from "../common/NoDataPlaceholder";

const SalesList = ({ sales, onEdit, onDelete }) => {
  return (
    <div>
      <ul>
        {sales.length === 0 ? (
          <NoDataPlaceholder message={"No Sales List Entries"} />
        ) : (
          sales.map((sale, index) => (
            <SalesItem
              key={index}
              sale={sale}
              index={index}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))
        )}
      </ul>
    </div>
  );
};

SalesList.propTypes = {
  sales: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired,
      product: PropTypes.string.isRequired,
    })
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default SalesList;
