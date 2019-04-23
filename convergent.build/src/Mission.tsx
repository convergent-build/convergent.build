import React from 'react';

const Mission: React.FC = () => {
  return (
    <section className="controls-inside p-0 controls-light bg-dark">
    <div className="height-60 carousel-cell py-3 py-md-4 height-40 overlay-dark">
      <img className="bg-image opacity-50" src="assets/img/bg.jpg" alt="Build beautiful, modular websites." />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className="display-4 text-white">It's the thing that gets us to the thing.</h1>
              <p className="lead text-light">Inspiring and developing the next entrepreneurially-minded generation.</p>
              <a href="#" className="btn btn-primary btn-lg">What we do</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
