import React from "react";

const Stats: React.FC = () => {
  return (
    <section className="pt-md-3 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-lg-flex">
            <div className="card shadow-lg">
              <div className="card-body py-4">
                <span className="d-block h1 display-4">🏫🎓 2</span>
                <p>Number of dependable chapters</p>
                <a href="#chapters" className="bread">
                  Proudly established at Texas (Fall '16) and Cal (Fall '18) ↗︎
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-lg-flex">
            <div className="card shadow-lg">
              <div className="card-body py-4">
                <span className="d-block h1 display-4">👩🏼‍💻👨🏽‍💻 130+</span>
                <p>
                  Students that take part in our Build Team program each
                  semester
                </p>
                <a href="https://medium.com/txconvergent/build-teams-at-texas-convergent-fa74f3573f30" className="bread">
                  The curriculum that improves by the week ↗︎
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-lg-flex">
            <div className="card shadow-lg">
              <div className="card-body py-4">
                <span className="d-block h1 display-4">🛠📈 50+</span>
                <p>
                  Build teams and companies/products created since inception
                </p>
                <a
                  href="https://medium.com/txconvergent/side-project-expo-spring-2019-8d1000cdca2e"
                  className="bread"
                >
                  Career fair with the roles reversed? 🤔↗︎
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
