import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CategoryModal, CostCard } from "../components";
import { Context } from "../Context/ContectProvider";

const OperationsP = () => {
  const { costs } = useContext(Context);
  const [editCosts, setEditCosts] = useState(null);

  const handleSubmit = (obj) => {
    if (obj.category === undefined || !obj.price) toast("Enter all items");
    else
      setEditCosts((costs) =>
        costs.map((cost) => {
          if (cost.id === obj.id) return obj;
          else return cost;
        })
      );
  };

  return (
    <>
      <div className="d-flex mt-4 flex-wrap">
        {costs.map((card, id) => (
          <div className="col-lg-4 col-md-6 col-12 p-2" key={id}>
            <CostCard card={card} setEditCosts={setEditCosts} />
          </div>
        ))}
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

export default OperationsP;
