import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VictoryPie } from "victory-pie";
import { CategoryCard, CategoryModal, CreateCost } from "../components";
import { Context } from "../Context/ContectProvider";

const HomeP = () => {
  const { reduce_category, handleSubmit, costs } = useContext(Context);
  let values = {};
  const myData = reduce_category.map((elements) => {
    return { x: elements.category, y: elements.price };
  });
  const chartColors = [
    "blue",
    "yellow",
    "red",
    "green",
    "coral",
    "pink",
    "black",
  ];

  return (
    <div className="container">
      <CreateCost />

      <div className="text-center d-flex justify-content-center">
        <div className="col-lg-5 ">
          {costs.length > 0 && (
            <VictoryPie data={myData} colorScale={chartColors} radius={120} />
          )}
        </div>
      </div>

      <CategoryModal
        handleSubmit={handleSubmit}
        values={values}
        modalId="homeModal"
        modalName="Create"
      />
      <ToastContainer />
      {reduce_category.map((card, id) => (
        <CategoryCard key={id} card={card} />
      ))}
    </div>
  );
};

export default HomeP;
