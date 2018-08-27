import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  state = {
    isTop: true
  };

  componentWillMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }

  render() {
    return (
      <nav
        className={
          this.state.isTop
            ? 'navbar navbar-expand-lg fixed-top'
            : 'navbar navbar-scroll navbar-expand-lg fixed-top'
        }>
        <div className="container">
          <NavLink
            className="navbar-brand d-inline-flex flex-column justify-content-end text-white"
            to="/">
            <span className="brand-one font-weight-bold">TechCareers</span>
            <span className="brand-two pt-0">By NESA</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarText">
            <ul className="navbar-nav">
              <li className="nav-item mx-2">
                <NavLink
                  activeClassName="is-active"
                  exact={true}
                  className="text-white"
                  to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  activeClassName="is-active"
                  className="text-white"
                  to="/jobs">
                  Jobs
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  activeClassName="is-active"
                  className="text-white"
                  to="/post">
                  Post Jobs
                </NavLink>
              </li>
              <li className="nav-item mx-2">
                <NavLink
                  activeClassName="is-active"
                  className="text-white"
                  to="/about">
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;

// export default () => (
//   <nav className={`navbar navbar-expand-lg fixed-top`}>
//     <div className="container">
//       <NavLink
//         className="navbar-brand d-inline-flex flex-column justify-content-end text-white"
//         to="/">
//         <span className="brand-one font-weight-bold">TechCareers</span>
//         <span className="brand-two pt-0">By NESA</span>
//       </NavLink>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarText"
//         aria-controls="navbarText"
//         aria-expanded="false"
//         aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon" />
//       </button>
//       <div
//         className="collapse navbar-collapse justify-content-end"
//         id="navbarText">
//         <ul className="navbar-nav">
//           <li className="nav-item mx-2">
//             <NavLink
//               activeClassName="is-active"
//               exact={true}
//               className="text-white"
//               to="/">
//               Home
//               <span className="sr-only">(current)</span>
//             </NavLink>
//           </li>
//           <li className="nav-item mx-2">
//             <NavLink
//               activeClassName="is-active"
//               className="text-white"
//               to="/jobs">
//               Jobs
//             </NavLink>
//           </li>
//           <li className="nav-item mx-2">
//             <NavLink
//               activeClassName="is-active"
//               className="text-white"
//               to="/post">
//               Post Jobs
//             </NavLink>
//           </li>
//           <li className="nav-item mx-2">
//             <NavLink
//               activeClassName="is-active"
//               className="text-white"
//               to="/about">
//               About
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// );
