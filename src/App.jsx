import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContextProvider from "./Context/ContectProvider";
import { CategoryP, HomeP, OperationsP, SpesificCategoryP } from "./pages";
import { Layout } from "./components";
import "./globalStyle.css";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/">
              <Route index element={<HomeP />} />
              <Route path="category" element={<CategoryP />} />
              <Route
                index
                path="category/:category"
                element={<SpesificCategoryP />}
              />
              <Route path="operations" element={<OperationsP />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
