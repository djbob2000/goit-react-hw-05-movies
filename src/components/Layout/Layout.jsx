import React from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import logo from '../../img/logo.svg';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <div className={css.container}>
          <Link to="/">
            <img
              className={css.logo}
              src={logo}
              alt="The Movie Database (TMDB)"
              width="150"
            />
          </Link>
          <nav>
            <ul className={css.navlist}>
              <li>
                <NavLink className={css.navlistLink} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className={css.navlistLink} to="/movies">
                  Movies
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <div className={css.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Layout;
