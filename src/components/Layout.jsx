import { NavLink, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

function Layout() {
    return (
        <div>
            <nav className={styles.navbar}>
                <NavLink to="/" className={({ isActive }) => isActive ? styles.active : styles.navItem}>
                    Home
                </NavLink>
                <NavLink to="/movies" className={({ isActive }) => isActive ? styles.active : styles.navItem}>
                    Movies
                </NavLink>
            </nav>
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;

