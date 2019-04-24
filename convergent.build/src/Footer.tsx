import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="spacer-y-3 bg-dark">
      <div className="container">
        <div className="row mt-3 mt-md-4">
          <div className="col">
            <span className="text-small text-white opacity-50">
              Convergent.
            </span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <ul className="list-unstyled d-flex list-pipe-separator">
              <li>
                <a href="#" className="text-white text-small">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white text-small">
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
