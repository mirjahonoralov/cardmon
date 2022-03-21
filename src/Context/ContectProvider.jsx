import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import uuid from "react-uuid";

export const Context = createContext();

const ContextProvider = (props) => {
  const [categories, setCategories] = useState([
    "home",
    "phone",
    "food",
    "internet",
  ]);
  const [costs, setCosts] = useState([]);
  const removeCategory = (item) =>
    setCategories(categories.filter((cat) => cat !== item));

  const removeCard = (item) => setCosts(costs.filter((cost) => cost !== item));

  const handleSubmit = (cost) => {
    if (cost.category === undefined || !cost.price) toast("Enter all items");
    else
      setCosts([
        ...costs,
        { ...cost, operations: 1, price: cost.price * 1, id: uuid() },
      ]);
  };

  const reduce_category = costs.reduce((total, cost) => {
    if (total.find((item) => item.category === cost.category)) {
      return total.map((obj) => {
        if (obj.category === cost.category)
          return {
            ...obj,
            price: obj.price + cost.price,
            operations: obj.operations + 1,
          };
        else return obj;
      });
    } else return [...total, cost];
  }, []);

  const defaultValue = {
    category: categories[0],
    price: "",
    desc: "",
    dateTime: "",
  };

  const state = {
    categories,
    setCategories,
    costs,
    setCosts,
    removeCategory,
    removeCard,
    handleSubmit,
    reduce_category,
    defaultValue,
  };

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};

export default ContextProvider;
