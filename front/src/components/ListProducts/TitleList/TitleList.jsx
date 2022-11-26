import React, { useState } from "react";
import Categories from "../Categories/Categories";

const TitleList = (props) => {
  const { title } = props;
  return (
    <section className="container py-4">
      <div className="row text-left">
        <div className="col-lg-6">
          <h2 className="h2 title-left">
            <b>{title}</b>
          </h2>
          <hr></hr>
        </div>
      </div>
      {title == "Categories" ? <Categories></Categories> : ""}
    </section>
  );
};

export default TitleList;
