import React, { useContext, useRef } from "react";
import { Button, Form, InputGroup } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../Context/ContectProvider";

const CategoryP = () => {
  const inputRef = useRef();
  const { categories, setCategories, removeCategory } = useContext(Context);
  const createCategory = (e) => {
    e.preventDefault();
    let value = inputRef.current.value;
    if (value && !categories.includes(value)) {
      setCategories([...categories, inputRef.current.value]);
      inputRef.current.value = "";
    } else {
      toast.error("same or empty category");
      return;
    }
  };

  // const removeCategory = (item) =>
  //   setCategories(categories.filter((cat) => cat !== item));

  return (
    <div>
      <Form onSubmit={createCategory} className="mt-5">
        <InputGroup>
          <input className="form-control" ref={inputRef} />
          <ToastContainer />
          <Button type="submit">Add carygory</Button>
        </InputGroup>
      </Form>
      <div>
        {categories.map((category, id) => (
          <Button key={id} className="m-3 position-relative">
            <div
              className="badge bg-danger rounded-pill"
              style={{ position: "absolute", top: "-10px", right: "-10px" }}
              onClick={() => removeCategory(category)}
            >
              x
            </div>
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryP;
