import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { toast } from "react-toastify";
import { Context } from "../Context/ContectProvider";
import { CategoryModal, CostCard } from "../components";

const SpesificCategoryP = () => {
  const params = useParams();
  const { costs, setCosts } = useContext(Context);
  const [editCosts, setEditCosts] = useState(null);

  const handleSubmit = (obj) => {
    if (obj.category === undefined || !obj.price) toast("Enter all items");
    else
      setCosts((costs) =>
        costs.map((cost) => {
          if (cost.id === obj.id) return obj;
          else return cost;
        })
      );
  };

  return (
    <>
      <div>
        <Link to="/" className="text-decoration-none">
          <div
            style={{ width: "80px" }}
            className="badge bg-dark text-white fs-6 d-flex align-items-center mt-1"
          >
            <BiArrowBack />
            Back
          </div>
        </Link>
        <div className="d-flex mt-4 flex-wrap">
          {costs
            .filter((cost) => cost.category === params.category)
            .map((card, id) => (
              <div className="col-lg-4 col-md-6 col-12 p-2" key={id}>
                <CostCard card={card} setEditCosts={setEditCosts} />
              </div>
            ))}
        </div>
      </div>

      <CategoryModal
        values={editCosts}
        modalId="editModal"
        modalName="Edit"
        handleSubmit={handleSubmit}
      />
    </>
  );
};

export default SpesificCategoryP;
