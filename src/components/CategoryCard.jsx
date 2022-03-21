import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ card }) => {
  return (
    <div className="border my-4 p-sm-3 p-2 d-flex justify-content-between align-items-center">
      <div className="">
        <div className="fs-3">
          <i className="category-card">Category: </i>
          <div className="category-card badge bg-secondary">
            {card.category}
          </div>
        </div>
        <Link
          to={`/category/${card.category}`}
          className="text-decoration-none fw-bold"
        >
          <div className="badge text-primary fs-6">
            operations:{" "}
            <div className="category-card badge bg-danger rounded-pill">
              {card.operations}
            </div>
          </div>
        </Link>
      </div>
      <h3 className="category-card">Sum: ${card.price}</h3>
    </div>
  );
};

export default CategoryCard;
