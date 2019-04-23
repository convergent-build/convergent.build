import React from 'react';

const Header: React.FC = () => {
  const msgs = [
    'Operating like we advise others to operate',
    'Buzzwords to business (and product)',
    'Builders gotta build',
    // 'technology 💻 business 💼 design 🎨 coffee ☕️'
    'technology && business && design && coffee'
  ];
  const msg = msgs[Math.floor(Math.random() * msgs.length)];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          Convergent.
        </a>
        <div className="d-flex order-lg-3 ml-lg-2">
          {msg}
        </div>
        <div className="collapse navbar-collapse justify-content-between navMenu order-lg-2">
          <div className="d-lg-flex align-items-center">
            <div className="d-flex align-items-center justify-content-between my-1 my-lg-0">
              <ul className="navbar-nav d-flex flex-row">
                <li className="nav-item">
                  <a href="" className="nav-link pr-2">Mission</a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link pr-2">People</a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link pr-2">Campus</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
