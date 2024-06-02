import React from "react";
import PropTypes from "prop-types";
import ActionButton from "../buttons/ActionButton";
import "./SalesItem.css";
const SalesItem = ({ sale, onEdit, onDelete, index }) => {
  return (
    <div className="sales-item">
      <div className="sales-item-text">
        <span>
          {sale.firstName} {sale.lastName}
        </span>
        <span>({sale.age})</span>
        <span> - {sale.product}</span>
      </div>
      <div className="sales-item-buttons">
        <ActionButton className="edit" onClick={() => onEdit(index)}>
          Update
        </ActionButton>
        <ActionButton className="delete" onClick={() => onDelete(index)}>
          Delete
        </ActionButton>
      </div>
    </div>
  );
};

SalesItem.propTypes = {
  sale: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    product: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default SalesItem;
