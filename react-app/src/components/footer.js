import React from 'react';

import heart from '../images/heart-outline.png';

export default () => (
  <footer className="pt-2">
    <div className="footer">
      <h3>
        Made with
        <span className="mx-1">
          <img src={heart} alt="foot-icon" />
        </span>
        in Lagos
      </h3>
    </div>
  </footer>
);
