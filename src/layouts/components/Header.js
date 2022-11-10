import { NavLink } from 'react-router-dom';
import Signup from '~/components/buttons/Signup';
import Login from '~/components/buttons/Login';
import CartBtn from '~/components/buttons/CartBtn';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        Tun's Shop
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="products">
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <Login />
                        <Signup />
                        <CartBtn />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
