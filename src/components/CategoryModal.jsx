import React, { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Context } from "../Context/ContectProvider";

const CategoryModal = ({
  values,
  modalId,
  modalName,
  handleSubmit,
  defaultValue,
}) => {
  const { categories } = useContext(Context);

  const [cost, setCost] = useState(defaultValue);
  const [closeModal, setCloseModal] = useState(false);
  const handleChange = (e) =>
    setCost({ ...cost, [e.target.name]: e.target.value });

  const getValues = (e) => {
    e.preventDefault();
    handleSubmit({ ...cost, price: cost.price * 1 });
    setCost(defaultValue);
  };

  useEffect(() => values && setCost({ ...cost, ...values }), [values]);
  useEffect(
    () => (cost.price ? setCloseModal(true) : setCloseModal(false)),
    [cost]
  );

  return (
    <div
      className="modal fade"
      id={modalId}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <ToastContainer />
          <form onSubmit={getValues}>
            <div className="modal-header">
              <div>{modalName} Cost</div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <input
                className="mb-3 form-control"
                onChange={handleChange}
                name="price"
                placeholder="Enter price"
                pattern="^[0-9]*$"
                value={cost.price}
              />
              <select
                className="form-control mb-3"
                onChange={handleChange}
                name="category"
              >
                {categories.map((cat, id) => (
                  <option key={id} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <input
                className="mb-3 form-control"
                onChange={handleChange}
                name="desc"
                placeholder="Description"
                type="textarea"
                value={cost.desc}
              />
              <input
                className="form-control mb-3"
                onChange={handleChange}
                name="dateTime"
                placeholder="Date and time"
                type="datetime-local"
                value={cost.dateTime}
              />
            </div>
            <div className="modal-footer">
              <input
                type="submit"
                value={modalName}
                className="btn btn-success"
                data-bs-dismiss={closeModal && "modal"}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CategoryModal;
