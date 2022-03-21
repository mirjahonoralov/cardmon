import React, { useContext } from "react";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";
import { Context } from "../Context/ContectProvider";

const CostCard = ({ card, setEditCosts }) => {
  const { removeCard } = useContext(Context);
  const time = card.dateTime.replace("T", " ");

  return (
    <div className="p-4 rounded-3 border bg-secondary text-white d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h3 className="m-0">{card.category}</h3>
      </div>
      <p>{card.desc}</p>
      <span className="fw-bold">Date: {time}</span>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <span className="badge badge-md fs-6 bg-info">
          Spent: ${card.price}
        </span>
        <div className="d-flex gap-3">
          <div
            className="badge bg-warning fs-6 p-2 rounded-3"
            data-bs-toggle="modal"
            data-bs-target="#editModal"
            onClick={() => setEditCosts(card)}
          >
            <AiFillEdit />
          </div>
          <div className="badge bg-danger fs-6 p-2 rounded-3">
            <MdDeleteForever onClick={() => removeCard(card)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostCard;
