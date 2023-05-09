import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import css from "./Layout.module.css";

export const Layout = () => {
  return (
    <div>
      <header className={css.headerLayout}>
        <nav className={css.navLayout}>
          <ul className={css.ulLayout}>
            <li>
              <Link className={css.navLink} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={css.navLink} to="/tweets">
                Tweets
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={css.main}>
        <Suspense fallback={<div className={css.loading}>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
