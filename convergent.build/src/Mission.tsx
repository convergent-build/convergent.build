import React from "react";

const Mission: React.FC = () => {
  return (
    <>
      <section className="row no-gutters p-0">
        <div className="col-md-5 col-lg-6 d-flex flex-column order-md-2">
          <img
            src="assets/img/mission-1.jpg"
            alt="Image"
            className="flex-grow-1"
          />
        </div>
        <div className="col-md-7 col-lg-6 d-flex bg-white order-md-1 align-items-center">
          <div className="row no-gutters justify-content-center py-md-4">
            <div className="col-md-10 col-lg-9 col-xl-8 p-3 py-md-5">
              <span className="h2 d-block">
                Equip the future with the skills to build products in startups
                and industry.
              </span>
              <p className="lead">
                Our structures, values, and internal processes stem from our
                team's collective experience at the best firms around the
                galaxy.
              </p>
              <a
                href="https://medium.com/txconvergent/convergent-build-teams-a-mid-semester-look-back-40db9280a408"
                className="lead"
              >
                Learn more about our data-driven approach to student-curriculum
                matching ↗︎
              </a>
              <hr />
              <div className="d-flex">
                <img
                  src="assets/img/arjo.jpg"
                  alt="Avatar"
                  className="avatar"
                />
                <div className="ml-3">
                  <p className="mb-0">
                    &#x201C;Beautiful thing happen when you put diverse group of
                    individuals in same room!&#x201D;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="row no-gutters p-0 flex-row-reverse">
        <div className="col-md-5 col-lg-6 d-flex flex-column order-md-2">
          <img
            src="assets/img/mission-2.jpg"
            alt="Image"
            className="flex-grow-1"
          />
        </div>
        <div className="col-md-7 col-lg-6 d-flex bg-white order-md-1 align-items-center">
          <div className="row no-gutters justify-content-center py-md-4">
            <div className="col-md-10 col-lg-9 col-xl-8 p-3 py-md-5">
              <span className="h2 d-block">
                Encourage personal development of an entrepreneurial mindset.
              </span>
              <p className="lead">
                Which we believe is beneficial regardless of one's desire to
                start a company. It's no secret that our campuses are home to a
                huge amount of startup and industry talent—just look at the
                numbers of alum flocking to "big-N" tech firms and Silicon
                Valley.
              </p>
              <p className="lead">
                But who will innovate outside of the classroom, take smart risks
                in their youth, and take ownership of what they work on?
              </p>
              <div className="d-flex">
                <blockquote className="twitter-tweet" data-lang="en">
                  <p lang="en" dir="ltr">
                    The laziness of new grads is hugely to the advantage of
                    companies like Google, which appears to be the MIT of
                    employers. But there&#39;s no such thing. What you want to
                    find is the company that is now what Google was in 1999.
                  </p>
                  &mdash; Paul Graham (@paulg){" "}
                  <a href="https://twitter.com/paulg/status/1118890176770711553?ref_src=twsrc%5Etfw">
                    April 18, 2019
                  </a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
