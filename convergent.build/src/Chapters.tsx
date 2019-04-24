import React from "react";

const Chapters: React.FC = () => {
  return (
    <>
      <section>
        <div className="container" id="#chapters">
          <div className="row text-center">
            <div className="col">
              <span className="h1">Chapters</span>
            </div>
          </div>
        </div>
      </section>
      <section className="row no-gutters p-0">
        <div className="col-md-7 col-lg-6 d-flex bg-white align-items-center border-right text-center align-middle border-bottom">
          <div className="row no-gutters justify-content-center py-md-4 w-100">
            <div className="col-md-10 col-lg-9 col-xl-8 p-3 py-md-5">
              <img src="assets/img/texas.svg" id="texas-logo" />
              <span className="h2 d-block">Launched Spring 2017</span>
              <p className="lead" />
              <a href="http://www.txconvergent.org/" className="lead">
                Texas Convergent ↗︎
              </a>
              <hr />
            </div>
          </div>
        </div>
        <div className="col-md-7 col-lg-6 d-flex bg-white align-items-center border-left text-center align-middle border-bottom">
          <div className="row no-gutters justify-content-center py-md-4 w-100">
            <div className="col-md-10 col-lg-9 col-xl-8 p-3 py-md-5">
              <img src="assets/img/cal.svg" id="cal-logo" />
              <span className="h2 d-block">Launched Spring 2019</span>
              <p className="lead" />
              <a href="http://www.calconvergent.com/" className="lead">
                Convergent @ Berkeley ↗︎
              </a>
              <hr />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Chapters;
