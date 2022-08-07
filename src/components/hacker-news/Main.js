import React from "react";
import Button from "./Button";
import "./Main.css";
import SearchForm from "./SearchForm";
import Stories from "./Stories";

const Main = () => {
  return (
    <>
      <SearchForm />
      <Button />
      <Stories />
    </>
  );
};

export default Main