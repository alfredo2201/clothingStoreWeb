import React from "react";
// It is important for us that you have a good experience
const Banner = (props) => {
    const {titleDark, titleGreen, description} = props
    return (
        <section className="bg-success_gray py-5">
        <div className="container text-center">
          <div className="row align-items-center">
            <div className="list-inline">
              <h1 className="h1 list-inline-item">
                <b>{titleDark}</b>
              </h1>
              <h1 className="text-success list-inline-item">{titleGreen}</h1>              
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
    )

}

export default Banner;