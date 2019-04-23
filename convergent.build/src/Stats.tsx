import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="pt-md-3 bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-lg-flex">
            <div className="card shadow-lg">
              <div className="card-body py-4">
                <span className="d-block h1 display-4">🏫🎓 2</span>
                <p>Number of chapters</p>
                <a href="">Learn about our origins in Texas and our growth at Cal</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-lg-flex">
            <div className="card shadow-lg">
              <div className="card-body py-4">
                <span className="d-block h1 display-4">👩🏼‍💻👨🏽‍💻 130+</span>
                <p>Students that take part in our build team program each semester</p>
                <a href="">Read more about membership</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-lg-flex">
            <div className="card shadow-lg">
              <div className="card-body py-4">
                <span className="d-block h1 display-4">🛠📈 20+</span>
                <p>Build teams created since inception</p>
                <a href="">See how one of their products became a part of campus life</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
