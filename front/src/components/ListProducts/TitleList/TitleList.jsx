import React, { useState } from "react";

const TitleList = () => {
    const [title, setTitle] = useState("Check at our products")
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
    </section>
  );
};

export default TitleList
